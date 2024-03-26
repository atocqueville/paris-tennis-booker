import React from 'react';
import ReactDOM from 'react-dom/client';
import { Grommet } from 'grommet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';

const theme = {
    global: {
        colors: {
            brand: '#228BE6',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Grommet theme={theme} full>
            <RouterProvider router={router} />
        </Grommet>
    </React.StrictMode>
);
