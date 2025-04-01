import { sql } from 'drizzle-orm';
import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const userType = pgEnum('user_type', ['student', 'faculty', 'admin']);
export const oauthType = pgEnum('oauth_type', ['google', 'microsoft']);

export const user = pgTable('user', {
	id: text('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	oauthId: text('oauth_id').notNull().unique(),
	oauthType: oauthType(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	image: text('image'),
	registrationNumber: text('registration_number').notNull(),
	userType: userType().default('student').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;
export type NewSession = typeof session.$inferInsert;

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
