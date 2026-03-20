import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing
    
    return (
        <div className='border bg-amber-500 rounded-md'>
            <div>
                <h1 className='text-4xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            <div>
                <p>{description}</p>
                {
                    features.map((feature,index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;