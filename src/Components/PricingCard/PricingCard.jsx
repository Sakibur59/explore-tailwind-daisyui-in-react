import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,features} = pricing
    
    return (
        <div className='border bg-amber-500 rounded-md'>
            <div>
                <h1 className='text-4xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            <div>
                {
                    features.map(feature => <PricingFeature feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;