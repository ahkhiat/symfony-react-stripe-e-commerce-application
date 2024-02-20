import  React, {useEffect, useState} from "react";

export interface Product {
    active: boolean;
    createdAt: Date;
    description: string;
    id: number;
    imageName: string;
    name: string;
    price: number;
    
}


export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect( () => {
        fetch('/api/products')
        .then(response => response.json())
        .then(json => setProducts(json));
    }, []);

    return products;
}