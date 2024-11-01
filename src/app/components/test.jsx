import React, { useEffect } from 'react';

const ScrollEventComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log('L\'utilisateur a fait défiler la page');
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Contenu du composant */}
        </div>
    );
};

export default ScrollEventComponent;
