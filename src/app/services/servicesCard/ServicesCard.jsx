import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ name, feature, benefit, image }) => {
    return (
        <div className="card bg-base-100 border-2 hover:shadow-xl ">
            <div className='flex justify-center items-center  w-full'>
                <Image
                    src={image}
                    width={300}
                    height={50}
                    alt="img">
                </Image>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{feature}</p>

            </div>
        </div>
    );
};

export default ServicesCard;