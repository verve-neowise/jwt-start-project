import { PrismaClient, Role } from "@prisma/client";
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient();

async function create(username: string, password: string, role: Role) {

    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)

    const user = await prisma.user.create({
        data: {
            username,
            password: hashedPassword,
            role
        }
    });
    return user;
}

async function findByUsername(username: string) {
    return prisma.user.findFirst({
        where: {
            username
        }
    })
}

export default {
    create,
    findByUsername
}