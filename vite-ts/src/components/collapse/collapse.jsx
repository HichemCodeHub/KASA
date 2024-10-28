import React, { useState } from 'react';
import './collapse.css';
import arrowIcon from '../../assets/arrowabout/arrowForCollapse.svg'; 

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen); // Inverser l'état d'ouverture
    };

    return (
        <div className="collapse">
            <button className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img
                    src={arrowIcon}
                    alt="Flèche"
                    className={isOpen ? 'down' : ''} // Appliquer la classe 'down' si ouvert
                />
            </button>
            <div className={`collapse-content ${isOpen ? 'animate' : ''}`}>
                {children} {/* Contenu qui sera affiché */}
            </div>
        </div>
    );
};

export default Collapse;