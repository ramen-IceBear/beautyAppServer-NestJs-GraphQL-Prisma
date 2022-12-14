import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput } from 'src/types/graphql';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<{
        id: number;
        email: string;
        name: string;
        role: import(".prisma/client").Role;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    update(id: number, { name }: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
