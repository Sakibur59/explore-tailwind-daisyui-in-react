import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border bg-amber-500 rounded-md'>
            <div>
                <h1 className='text-4xl'>{pricing.name}</h1>
                <h4 className='text-2xl'>{pricing.price}</h4>
            </div>
            <div>
                <p>{pricing.features}</p>
            </div>
        </div>
    );
};

export default PricingCard;