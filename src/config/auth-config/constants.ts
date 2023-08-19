import { ConfigService } from '@nestjs/config';
import { CookieOptions } from 'express';

const config = new ConfigService();

export const jwtConstants = {
    secret: config.get('JWT_SECRET')
};

let secure = config.get('COOKIE_SECURE');
secure === 'true' ? (secure = true) : (secure = false);
const maxAge = config.get('COOKIE_MAX_AGE_ONE_DAY');

export const cookiesOptions: CookieOptions = {
    httpOnly: true,
    secure,
    sameSite: 'strict',
    maxAge,
    path: '/'
};
