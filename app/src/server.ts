import Elysia from 'elysia';
import { bookingController } from './controllers/booking';

export function registerControllers(app: Elysia) {
    app.use(bookingController);
}
