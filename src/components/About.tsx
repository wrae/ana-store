import React from 'react';

type PageProps = {
    language: 'en' | 'es';
};

const About: React.FC<PageProps> = ({ language }) => (
    <div className="page">
        <h2>{language === 'en' ? 'Owner and Operator: Ana' : 'Propietaria y Operadora: Ana'}</h2>
    </div>
);

export default About;
