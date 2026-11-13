import { Request } from 'express';
import { param, body, ValidationChain, validationResult } from 'express-validator';
import { ProductDTO } from '../models/product.model';

export const createProductValidation: ValidationChain[] = [
    requireName(),
    requirePrice(),
    requireDescription(),
    requireCategory()
];

export const updateProductValidation: ValidationChain[] = [
    param('id')
        .isString()
        .withMessage('El ID debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El ID es requerido'),
    body('name')
        .optional()
        .isString()
        .withMessage('El nombre debe ser una cadena de texto')
        .isLength({ min: 3, max: 100 })
        .withMessage('El nombre debe tener entre 3 y 100 caracteres'),
    body('price')
        .optional()
        .isNumeric()
        .withMessage('El precio debe ser un número'),
    body('description')
        .optional()
        .isString()
        .withMessage('La descripción debe ser una cadena de texto')
        .isLength({ min: 10, max: 500 })
        .withMessage('La descripción debe tener entre 10 y 500 caracteres'),
    body('category')
        .optional()
        .isString()
        .withMessage('La categoría debe ser una cadena de texto')
        .isLength({ min: 2, max: 50 })
        .withMessage('La categoría debe tener entre 2 y 50 caracteres'),
];

export const productIdValidation: ValidationChain[] = [
    param('id')
        .isString()
        .withMessage('El ID debe ser una cadena de texto')
        .notEmpty()
        .withMessage('El ID es requerido'),
];

function requireName(): ValidationChain {
  throw new Error('TODO(reto): requireName');
}

function requirePrice(): ValidationChain {
  throw new Error('TODO(reto): requirePrice');
}

function requireDescription(): ValidationChain {
  throw new Error('TODO(reto): requireDescription');
}

function requireCategory(): ValidationChain {
  throw new Error('TODO(reto): requireCategory');
}

export const validateProductDTO = (data: any): data is ProductDTO => {
  throw new Error('TODO(reto): validateProductDTO');
};

export const validateProductName = (name: string): boolean => {
  throw new Error('TODO(reto): validateProductName');
};

export const validateProductPrice = (price: number): boolean => {
  throw new Error('TODO(reto): validateProductPrice');
};

export const validateProductDescription = (description: string): boolean => {
  throw new Error('TODO(reto): validateProductDescription');
};

export const validateProductCategory = (category: string): boolean => {
  throw new Error('TODO(reto): validateProductCategory');
};

export const validateProductInput = (validations: ValidationChain[]): ValidationChain[] => {
  throw new Error('TODO(reto): validateProductInput');
};

export const validateProductUpdate = (validations: ValidationChain[]): ValidationChain[] => {
  throw new Error('TODO(reto): validateProductUpdate');
};