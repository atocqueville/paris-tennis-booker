import { Elysia } from 'elysia';
import db from '../db';

export const bookingController = new Elysia({ prefix: '/booking' })
    .get('/', async ({ set }) => {
        set.status = 200;
        set.headers['Content-Type'] = 'application/json';
        return await db.booking.findMany({ orderBy: { startDate: 'asc' } });
    })
    .get('/:id', async ({ params }) => {
        return await db.booking.findUniqueOrThrow({
            where: { id: Number(params.id) },
        });
    });
