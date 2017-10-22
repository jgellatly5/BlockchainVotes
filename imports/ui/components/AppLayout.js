import React from 'react';
import Navigation from './Navigation';

const AppLayout = ({ children }) => (
    <div>
        <Navigation />
        <div>
            { children }
        </div>
    </div>
);

export default AppLayout;
