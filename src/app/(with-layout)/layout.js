import Navbar from '@/components/Navbar';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>This is footer</footer>
        </div>
    );
};

export default WithLayout;