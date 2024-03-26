import { useState, useEffect } from 'react';
import { Header, HeaderExtendedProps, Text } from 'grommet';
import viteLogo from '/vite.svg';
import { Booking } from './models/booking';
import { SelectSearchExample } from './pages/create/Form.tsx';

const AppBar = (props: HeaderExtendedProps) => (
    <Header
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        {...props}
    />
);

function App() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/booking')
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    return (
        <div>
            <AppBar>
                <img src={viteLogo} className="logo" alt="Vite logo" />

                <Text size="large">My App</Text>
            </AppBar>
            <SelectSearchExample />
            {bookings.map((booking) => (
                <div key={booking.id}>
                    <p>{booking.location}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
