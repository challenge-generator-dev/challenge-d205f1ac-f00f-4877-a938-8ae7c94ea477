import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductRepository, InMemoryProductRepository } from './repositories/product.repository';
import { Product, ProductDTO } from './models/product.model';
import { BadRequestException, NotFoundException, ConflictException } from './exceptions/http.exception';
import { errorHandler } from './middlewares/errorHandler.middleware';
import { validateProductDTO, createProductValidation, updateProductValidation } from './validators/product.validator';

const app: Application = express();

app.use(express.json());

const productRepository: ProductRepository = new InMemoryProductRepository();

app.get('/products', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productRepository.getProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

app.get('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        if (!id || id.trim() === '') {
            throw new BadRequestException('El ID del producto es requerido');
        }
        
        const product = await productRepository.getProductById(id);
        
        if (!product) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
});

app.post('/products', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productData: ProductDTO = req.body;
        
        try {
            validateProductDTO(productData);
        } catch (validationError: any) {
            throw new BadRequestException(validationError.message);
        }
        
        const exists = await productRepository.productExists(productData.name);
        if (exists) {
            throw new ConflictException(`Ya existe un producto con el nombre "${productData.name}"`);
        }
        
        const newProduct = await productRepository.createProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        next(error);
    }
});

app.put('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const productData: ProductDTO = req.body;
        
        if (!id || id.trim() === '') {
            throw new BadRequestException('El ID del producto es requerido');
        }
        
        try {
            validateProductDTO(productData);
        } catch (validationError: any) {
            throw new BadRequestException(validationError.message);
        }
        
        const existingProduct = await productRepository.getProductById(id);
        if (!existingProduct) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        
        const exists = await productRepository.productExists(productData.name, id);
        if (exists) {
            throw new ConflictException(`Ya existe otro producto con el nombre "${productData.name}"`);
        }
        
        const updatedProduct = await productRepository.updateProduct(id, productData);
        
        if (!updatedProduct) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
});

app.delete('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        
        if (!id || id.trim() === '') {
            throw new BadRequestException('El ID del producto es requerido');
        }
        
        const existingProduct = await productRepository.getProductById(id);
        if (!existingProduct) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        
        const deleted = await productRepository.deleteProduct(id);
        
        if (!deleted) {
            throw new NotFoundException(`No se pudo eliminar el producto con ID ${id}`);
        }
        
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

app.use(errorHandler);

export { app };