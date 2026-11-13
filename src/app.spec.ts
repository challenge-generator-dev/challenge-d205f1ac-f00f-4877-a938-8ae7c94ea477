import request from 'supertest';
import { app } from './app';
import { Product } from './models/product.model';
import { InMemoryProductRepository } from './repositories/product.repository';
import { HttpException } from './exceptions/http.exception';

jest.mock('./repositories/product.repository');

describe('App Integration Tests', () => {
    let mockRepository: InMemoryProductRepository;

    beforeEach(() => {
        jest.clearAllMocks();
        mockRepository = new InMemoryProductRepository();
    });

    describe('GET /health', () => {
        it('should return 200 OK', async () => {
            const response = await request(app).get('/health');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ status: 'OK' });
        });
    });

    describe('POST /products', () => {
        const mockProduct: Product = {
            id: '1',
            name: 'Test Product',
            price: 100,
            description: 'Test Description',
            category: 'Test Category'
        };

        it('should create a product and return 201', async () => {
            const createSpy = jest.spyOn(mockRepository, 'createProduct').mockResolvedValue(mockProduct);
            (InMemoryProductRepository as any).prototype.create = createSpy;

            const response = await request(app)
                .post('/products')
                .send({
                    name: 'Test Product',
                    price: 100,
                    description: 'Test Description',
                    category: 'Test Category'
                });

            expect(response.status).toBe(201);
            expect(response.body).toEqual(mockProduct);
        });

        it('should return 400 when validation fails', async () => {
            const response = await request(app)
                .post('/products')
                .send({
                    name: '',
                    price: -100,
                    description: 'Test Description'
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('errors');
        });

        it('should return 500 when repository throws', async () => {
            const errorSpy = jest.spyOn(mockRepository, 'createProduct').mockRejectedValue(new Error('Database error'));
            (InMemoryProductRepository as any).prototype.create = errorSpy;

            const response = await request(app)
                .post('/products')
                .send({
                    name: 'Test Product',
                    price: 100,
                    description: 'Test Description',
                    category: 'Test Category'
                });

            expect(response.status).toBe(500);
            expect(response.body).toHaveProperty('message');
        });
    });

    describe('GET /products/:id', () => {
        const mockProduct: Product = {
            id: '1',
            name: 'Test Product',
            price: 100,
            description: 'Test Description',
            category: 'Test Category'
        };

        it('should return a product when found', async () => {
            const findSpy = jest.spyOn(mockRepository, 'getProductById').mockResolvedValue(mockProduct);
            (InMemoryProductRepository as any).prototype.findById = findSpy;

            const response = await request(app).get('/products/1');
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockProduct);
        });

        it('should return 404 when product not found', async () => {
            const findSpy = jest.spyOn(mockRepository, 'getProductById').mockResolvedValue(null);
            (InMemoryProductRepository as any).prototype.findById = findSpy;

            const response = await request(app).get('/products/999');
            expect(response.status).toBe(404);
        });

        it('should return 500 when repository throws', async () => {
            const errorSpy = jest.spyOn(mockRepository, 'getProductById').mockRejectedValue(new Error('Database error'));
            (InMemoryProductRepository as any).prototype.findById = errorSpy;

            const response = await request(app).get('/products/1');
            expect(response.status).toBe(500);
        });
    });
});