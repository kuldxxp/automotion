
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import { PrismaClient } from "../generated/prisma/client"

export function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL

    if (!connectionString) {
        throw new Error("DATABASE_URL is not set")
    }

    const pool = new pg.Pool({
        connectionString,
    })

    const adapter = new PrismaPg(pool as unknown as ConstructorParameters<typeof PrismaPg>[0])

    return new PrismaClient({ adapter })
}
