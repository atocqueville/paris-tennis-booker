import { Elysia } from 'elysia';

export const bookingController = new Elysia({ prefix: '/booking' })
    .get('/', () => 'hello')
    .get('/hi', () => 'hi');
