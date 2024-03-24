import { PrismaClient } from '@prisma/client';
import { BookingStatus } from '../src/models/booking.model';

const prisma = new PrismaClient();

// create a new user
await prisma.booking.create({
    data: {
        location: 'Roland Garros',
        startDate: new Date('2022-05-22'),
        status: BookingStatus.PENDING,
    },
});

// count the number of users
const count = await prisma.booking.count();
console.log(`There are ${count} bookings in the database.`);
