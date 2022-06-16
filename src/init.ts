import { Role } from "@prisma/client";
import userService from "./services/user.service";

async function initdb() {
    await userService.create("neowise", "123456", Role.ADMIN)
    await userService.create("juratbekoff", "abc", Role.USER)
}

initdb()