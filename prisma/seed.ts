import { PrismaClient } from '@prisma/client';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

import { randomUUID } from 'crypto';

const prisma = new PrismaClient();
const config = new ConfigService();

const admin_email = config.get('SEED_ADMIN_EMAIL');
const admin_password = config.get('SEED_ADMIN_PASS');

const company_email = config.get('SEED_COMPANY_EMAIL');
const company_password = config.get('SEED_COMPANY_PASS');

const standard_email = config.get('SEED_STANDARD_EMAIL');
const standard_password = config.get('SEED_STANDARD_PASS');

const custom_email = config.get('SEED_CUSTOM_EMAIL');
const custom_password = config.get('SEED_CUSTOM_PASS');

const hash = async (pass: string) => {
    return await argon.hash(pass);
};

async function main() {
   await prisma.user.upsert({
    where: { email: admin_email },
    update: {},
    create: {
        id: randomUUID(),
        email: admin_email,
        first_name: '',
        last_name: '',
        password: await hash(admin_password),
        telephone: '',
        role: 'admin',
        permissions: ['*']
    }
});

   await prisma.user.upsert({
    where: { email: company_email },
    update: {},
    create: {
        id: randomUUID(),
        email: company_email,
        first_name: '',
        last_name: '',
        password: await hash(company_password),
        telephone: '',
        role: 'company',
        permissions: ['+']
    }
});

   await prisma.user.upsert({
    where: { email: standard_email },
    update: {},
    create: {
        id: randomUUID(),
        email: standard_email,
        first_name: '',
        last_name: '',
        password: await hash(standard_password),
        telephone: '',
        role: 'standard',
        permissions: ['+']
    }
});

   await prisma.user.upsert({
    where: { email: custom_email },
    update: {},
    create: {
        id: randomUUID(),
        email: custom_email,
        first_name: '',
        last_name: '',
        password: await hash(custom_password),
        telephone: '',
        role: 'custom',
        permissions: ['-']
    }
});


}

main().catch((err) => err.message);
