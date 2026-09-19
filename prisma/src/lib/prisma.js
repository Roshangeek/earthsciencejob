import { PrismaClient } from '@prisma/client'

const prismaGlobal = globalThis.prismaGlobal || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismaGlobal

export const prisma = prismaGlobal

