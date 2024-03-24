// import { render } from 'preact';
// import { useEffect, useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

export function CreatePage() {
    // const [bookings, setBookings] = useState<Booking[]>([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/booking')
    //         .then((res) => res.json())
    //         .then((data) => setBookings(data));
    // }, []);

    return (
        <div>
            <Link activeClassName="active" href="/">
                back home
            </Link>
            <p>Je suis le page de formulaire</p>
        </div>
    );
}
