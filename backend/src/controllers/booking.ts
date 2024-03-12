import { Elysia } from 'elysia';

export const bookingController = new Elysia({ prefix: '/booking' })
    .get('/', ({ set }) => {
        set.status = 200;
        set.headers['Content-Type'] = 'application/json';

        return {
            bookings: [
                { id: 1, location: 'Booking 1' },
                { id: 2, location: 'Booking 2' },
            ],
        };
    })
    .get('/:id', ({ params }) => params);
