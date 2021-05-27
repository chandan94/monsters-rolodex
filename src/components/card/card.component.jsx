import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    const monster = props.monster;
    return (
        <div className="card-container">
            <div>
                <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
                <h3>{monster.name}</h3>
                <p> {monster.email}</p>
            </div>
        </div>
    );
}