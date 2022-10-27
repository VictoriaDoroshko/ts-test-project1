import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {

    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]
    
    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>

            <button 
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
                >
                {details ? 'Hide details' : 'Show details'}
            </button>

            {/* <button 
                className="py-2 px-4 border bg-blue-400"
                onClick={() => setDetails(false)}
                >
                Hide details
            </button> */}

            {details && <div>
                <p>{product.description}</p>
            </div>}
            <p>Rate: 
                <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span>
            </p>
        </div>
    );
};

export default Product;