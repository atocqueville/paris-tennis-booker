export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    FAILED = 'failed',
}

export interface Booking {
    id: number;
    location: string;
    startDate: string;
    status: BookingStatus;
}

export interface CreateBookingDB {
    $location: string;
    $startDate: string;
    $status: BookingStatus;
}
