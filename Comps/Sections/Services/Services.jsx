import React from 'react';
import Card from './Card';

function Services(props) {
    return (
        <div className="pt-40">
            <h3 className="SecTitle">Our services</h3>
            <Card img={'/sections/services/decripting.svg'} title={'Decripting'} desc={'increpting your data witch an advaced algorithm '}/>
        </div>
    );
}

export default Services;