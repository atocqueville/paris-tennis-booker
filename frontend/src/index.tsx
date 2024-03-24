import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Router, { Route } from 'preact-router';
import { Link } from 'preact-router/match';

import preactLogo from './assets/preact.svg';
import './style.css';
import { Booking } from './models/booking';
import { CreatePage } from './pages/create';

export function Home() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/booking')
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    return (
        <div>
            <a href="https://preactjs.com" target="_blank">
                <img
                    src={preactLogo}
                    alt="Preact logo"
                    height="160"
                    width="160"
                />
            </a>
            <h1>Get Started building Vite-powered Preact Apps </h1>

            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>{booking.location}</li>
                ))}
            </ul>

            <Link activeClassName="active" href="/create">
                Create Booking
            </Link>
        </div>
    );
}

function Resource(props) {
    return (
        <a href={props.href} target="_blank" class="resource">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </a>
    );
}

function RoutedApp() {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/create" component={CreatePage} />
        </Router>
    );
}

render(<RoutedApp />, document.getElementById('app'));
