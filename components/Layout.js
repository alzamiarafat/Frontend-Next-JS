import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div>
            <main>
                <Navbar />
                {children}
            </main>

        </div>
    )
}
