import { Product, ProductDTO } from '../models/product.model';

export interface ProductRepository {
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    createProduct(productData: ProductDTO): Promise<Product>;
    updateProduct(id: string, productData: ProductDTO): Promise<Product | null>;
    deleteProduct(id: string): Promise<boolean>;
    productExists(name: string, excludeId?: string): Promise<boolean>;
}

export class InMemoryProductRepository implements ProductRepository {
    private products: Product[] = [];

    async getProducts(): Promise<Product[]> {
        return this.products;
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null;
    }

    async createProduct(productData: ProductDTO): Promise<Product> {
        const productExists = await this.productExists(productData.name);
        if (productExists) {
            throw new Error('Product name already exists');
        }

        const newProduct: Product = {
            id: this.generateId(),
            ...productData
        };
        this.products.push(newProduct);
        return newProduct;
    }

    async updateProduct(id: string, productData: ProductDTO): Promise<Product | null> {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }

        const productExists = await this.productExists(productData.name, id);
        if (productExists) {
            throw new Error('Product name already exists');
        }

        const updatedProduct = {
            ...this.products[productIndex],
            ...productData
        };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<boolean> {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id !== id);
        return this.products.length !== initialLength;
    }

    async productExists(name: string, excludeId?: string): Promise<boolean> {
        return this.products.some(product =>
            product.name === name && product.id !== excludeId
        );
    }

    private generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }
}