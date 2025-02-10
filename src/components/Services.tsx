import React from 'react';

type PageProps = {
    language: 'en' | 'es';
};

const Services: React.FC<PageProps> = ({ language }) => (
    <div className="page">
        <h2>{language === 'en' ? 'Our Services' : 'Nuestros Servicios'}</h2>
        <ul>
            <li>{language === 'en' ? 'Painting Services: Interior and exterior painting, custom designs, and touch-ups.' : 'Servicios de Pintura: Pintura interior y exterior, diseños personalizados y retoques.'}</li>
            <li>{language === 'en' ? 'House Cleaning: Deep cleaning, regular cleaning, move-in/move-out cleaning.' : 'Limpieza de Casas: Limpieza profunda, limpieza regular, limpieza de mudanza.'}</li>
            <li>{language === 'en' ? 'Pressure Washing: Clean your exterior walls, driveways, and patios.' : 'Lavado a presión: Limpia tus paredes exteriores, entradas y patios.'}</li>
            <li>{language === 'en' ? 'Window Cleaning: Clean and streak-free windows for a polished look.' : 'Limpieza de Ventanas: Ventanas limpias y sin marcas para un aspecto pulido.'}</li>
        </ul>
    </div>
);

export default Services;
