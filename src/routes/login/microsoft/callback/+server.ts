import { decodeIdToken } from 'arctic';
import type { RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';
import { microsoft } from '$lib/server/db';
import {
	createSession,
	createUser,
	generateSessionToken,
	getUserFromOAuthId,
	setSessionTokenCookie
} from '$lib/server/auth';

// type GoogleClaims = {
//     sub: string;
//     email?: string;
//     email_verified?: boolean;
//     name?: string;
//     picture?: string;
//     locale?: string;
// };

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');
	const storedState = event.cookies.get('microsoft_oauth_state') ?? null;
	const codeVerifier = event.cookies.get('microsoft_code_verifier') ?? null;

	if (code === null || state === null || storedState === null || codeVerifier === null) {
		return new Response(null, {
			status: 400
		});
	}

	if (state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	let tokens: OAuth2Tokens;
	try {
		tokens = await microsoft.validateAuthorizationCode(code, codeVerifier);
	} catch (e) {
		console.error(e);
		return new Response(null, {
			status: 400
		});
	}
	//
	const claims = decodeIdToken(tokens.idToken());
	console.log(claims);
	// const googleUserId = claims.sub;

	// const existingUser = await getUserFromOAuthId(googleUserId);

	// if (existingUser?.id) {
	//     const sessionToken = generateSessionToken();
	//     const session = await createSession(sessionToken, existingUser.id);
	//     setSessionTokenCookie(event, sessionToken, session.expiresAt);
	//     return new Response(null, {
	//         status: 302,
	//         headers: {
	//             Location: '/'
	//         }
	//     });
	// }

	// const registrationNumber = claims.name?.split(' ').pop();
	// const userType = claims.name?.split(' ').length === 10 ? 'student' : 'faculty';
	// if (!registrationNumber) {
	//     return new Response(null, {
	//         status: 409
	//     });
	// }

	// const user = await createUser({
	//     oauthId: googleUserId,
	//     name: claims.name || '',
	//     email: claims.email || '',
	//     image: claims.picture || '',
	//     registrationNumber,
	//     oauthType: 'google',
	//     userType
	// });

	// const sessionToken = generateSessionToken();
	// const session = await createSession(sessionToken, user.id);
	// setSessionTokenCookie(event, sessionToken, session.expiresAt);
	return new Response(null, {
		status: 302,
		headers: {
			Location: '/'
		}
	});
}
