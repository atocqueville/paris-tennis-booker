import { Elysia, t } from 'elysia';
import db from '../db';
import { BookingStatus } from '../models/booking.model';

export const bookingController = new Elysia({ prefix: '/booking' })
    .get('/', async ({ set }) => {
        set.status = 200;
        set.headers['Content-Type'] = 'application/json';
        return db.booking.findMany({ orderBy: { startDate: 'asc' } });
    })
    .get('/:id', async ({ params }) => {
        return db.booking.findUniqueOrThrow({
            where: { id: Number(params.id) },
        });
    })
    .post(
        '/',
        async ({ body }) =>
            db.booking.create({
                data: {
                    location: body.location,
                    startDate: new Date(body.startDate),
                    status: BookingStatus.PENDING,
                },
            }),
        {
            body: t.Object({
                location: t.String(),
                startDate: t.Number(),
            }),
        }
    );
