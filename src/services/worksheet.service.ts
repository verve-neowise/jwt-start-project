import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

function create(content: string) {
    return prisma.blank.create({
        data: {
            content,
            date: new Date()
        }
    })
}

function findAll() {
    return prisma.blank.findMany()
}

export default {
    create,
    findAll
}