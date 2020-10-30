import React from 'react';
import Navbar from '../Header/Navbar';

const Blogs = () => {
    return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', height: '100vh', zIndex: -1 }}>
            <Navbar />
            <div>
                <h1 className="text-center text-warning" style={{ fontSize: '4rem', marginTop: '30vh' }}>Not good in writing blogs, but coming soon!!!</h1>
            </div>

        </div>
    );
};

export default Blogs;