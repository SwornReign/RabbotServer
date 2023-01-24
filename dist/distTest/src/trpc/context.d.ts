export const __esModule: boolean;
export function createContext({ req, res }: {
    req: any;
    res: any;
}): {
    req: any;
    res: any;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
};
