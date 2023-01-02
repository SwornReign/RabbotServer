import { PrismaClient } from '@prisma/client';
import { initTRPC } from '@trpc/server';


const t = initTRPC.create();
 
 
export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;

export type Models = keyof Omit<
  PrismaClient,
  'disconnect' | 'connect' | 'executeRaw' | 'queryRaw' | 'transaction' | 'on'
>