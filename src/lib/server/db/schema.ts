import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const userType = pgEnum('user_type', ['student', 'faculty', 'admin']);

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
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
export type Newuser = typeof user.$inferInsert;
