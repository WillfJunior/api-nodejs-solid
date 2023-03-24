import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()
const prisma = new PrismaClient()
app.get('/users', async (request, reply) => {
  const users = await prisma.user.findMany()

  return { users }
})
