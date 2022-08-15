import React from 'react';
import './List.css';

const List = ({ d }) => {
    const { name, age, image } = d;

    return (
        <article>
            <img src={image} alt="" />
            <div>
                <h3 className='name-title'>{name}</h3>
                <p className='des-title'>{age} years</p>
            </div>
        </article>
    );
};

export default List;