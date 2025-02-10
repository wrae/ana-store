// Home.tsx
import React from 'react';

type PageProps = {
    language: 'en' | 'es';
};

const Home: React.FC<PageProps> = ({ language }) => (
    <div className="page">
        <h2>{language === 'en' ? 'Maxx Painting and Cleaning LLC' : 'Maxx Pintura y Limpieza LLC'}</h2>
        <p>This is the home page.</p> {/* Debugging Text */}
    </div>
);

export default Home;
