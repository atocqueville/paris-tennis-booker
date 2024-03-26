import { PrismaClient } from '@prisma/client';
import { BookingStatus } from '../src/models/booking.model';

const prisma = new PrismaClient();

const bookingsSample = [
    {
        location: 'Roland Garros',
        startDate: new Date('2022-05-22'),
        status: BookingStatus.PENDING,
    },
    {
        location: 'Suzanne Lenglen',
        startDate: new Date('2022-06-15'),
        status: BookingStatus.CONFIRMED,
    },
    {
        location: 'Philippe Chatrier',
        startDate: new Date('2022-07-10'),
        status: BookingStatus.FAILED,
    },
];

async function main() {
    await prisma.booking.create({ data: bookingsSample[0] });
    await prisma.booking.create({ data: bookingsSample[1] });
    await prisma.booking.create({ data: bookingsSample[2] });
}

await main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
