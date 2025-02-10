import React from 'react';

type PageProps = {
    language: 'en' | 'es';
};

const Contact: React.FC<PageProps> = ({ language }) => (
    <div className="page">
        <h2>{language === 'en' ? 'Contact Us' : 'Contáctanos'}</h2>
        <form>
            <label>
                {language === 'en' ? 'Email' : 'Correo Electrónico'}:
                <input type="email" name="email" required />
            </label>
            <button type="submit">{language === 'en' ? 'Send' : 'Enviar'}</button>
        </form>
        <p>{language === 'en' ? 'Phone: (555) 123-4567' : 'Teléfono: (555) 123-4567'}</p>
        <p>{language === 'en' ? 'Service Hours: 9 AM - 5 PM' : 'Horas de Servicio: 9 AM - 5 PM'}</p>
    </div>
);

export default Contact;
