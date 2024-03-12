import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import preactLogo from './assets/preact.svg';
import './style.css';
import { Booking } from './models/booking';

export function App() {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/booking')
            .then((res) => res.json())
            .then((data) => setBookings(data.bookings));
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

            <section>
                <Resource
                    title="Learn Preact"
                    description="If you're new to Preact, try the interactive tutorial to learn important concepts"
                    href="https://preactjs.com/tutorial"
                />
                <Resource
                    title="Differences to React"
                    description="If you're coming from React, you may want to check out our docs to see where Preact differs"
                    href="https://preactjs.com/guide/v10/differences-to-react"
                />
                <Resource
                    title="Learn Vite"
                    description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
                    href="https://vitejs.dev"
                />
            </section>
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

render(<App />, document.getElementById('app'));
