export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
}

export interface ProductDTO {
    name: string;
    price: number;
    description: string;
    category: string;
}