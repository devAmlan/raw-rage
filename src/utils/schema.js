import { pgTable, serial, integer, varchar } from "drizzle-orm/pg-core";

export const User = pgTable("user", {
  id: serial("id").primaryKey(),
  utrId: integer("utrId").notNull(),
  price: integer("price").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(Date.now()),
});
