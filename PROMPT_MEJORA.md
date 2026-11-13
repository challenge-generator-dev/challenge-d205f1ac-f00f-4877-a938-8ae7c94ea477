# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/validators/product.validator.ts` — La fase "Definición de endpoints y validación básica" se implementa aqui: este archivo es el ejercicio.
- `src/middlewares/errorHandler.middleware.ts` — La fase "Implementación de endpoints y manejo de errores" se implementa aqui: este archivo es el ejercicio.

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores, Expone endpoints REST con validacion de entrada y manejo centralizado de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construcción de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de API REST para catálogo de productos
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición de endpoints y validación básica — objetivo: Definir los endpoints necesarios para el catálogo de productos y aplicar validación básica a las entradas. — entregable (NO resolver): Documentación de los endpoints definidos y código que implementa la validación básica.
- Fase 2: Implementación de endpoints y manejo de errores — objetivo: Implementar los endpoints definidos y asegurar un manejo centralizado de errores. — entregable (NO resolver): Código que implementa los endpoints y maneja los errores de forma centralizada.
- Fase 3: Refactorización y optimización — objetivo: Refactorizar el código para mejorar su legibilidad y rendimiento, y optimizar el manejo de errores. — entregable (NO resolver): Código refactorizado y optimizado, con un manejo de errores mejorado.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/app.spec.ts ===
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

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "30.0.0",
    "@types/supertest": "7.2.1",
    "@types/winston": "2.4.4",
    "express": "4.22.3",
    "express-validator": "7.3.2",
    "jest": "30.5.2",
    "supertest": "7.3.2",
    "ts-jest": "29.4.15",
    "ts-node": "10.9.2",
    "winston": "3.19.0"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/models/product.model.ts ===
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

// === ARCHIVO: src/repositories/product.repository.ts ===
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

// === ARCHIVO: src/exceptions/http.exception.ts ===
export class HttpException extends Error {
    public readonly statusCode: number;
    public readonly message: string;
    public readonly errors?: any[];

    constructor(statusCode: number, message: string, errors?: any[]) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string = 'Bad Request', errors?: any[]) {
        super(400, message, errors);
    }
}

export class NotFoundException extends HttpException {
    constructor(message: string = 'Not Found', errors?: any[]) {
        super(404, message, errors);
    }
}

export class ConflictException extends HttpException {
    constructor(message: string = 'Conflict', errors?: any[]) {
        super(409, message, errors);
    }
}

export class InternalServerErrorException extends HttpException {
    constructor(message: string = 'Internal Server Error', errors?: any[]) {
        super(500, message, errors);
    }
}

// === ARCHIVO: src/middlewares/errorHandler.middleware.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/http.exception';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
  throw new Error('TODO(reto): errorHandler');
};

export const errorHandlerMiddleware = errorHandler;

// === ARCHIVO: src/validators/product.validator.ts ===
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

// === ARCHIVO: src/main.ts ===
import { app } from './app';
import { startServer } from './server';

const PORT = process.env.PORT || 3000;

startServer(app, PORT);

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/server.ts ===
import { Application } from 'express';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'product-api' },
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({ timestamp, level, message, ...meta }) => {
                    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
                })
            )
        })
    ]
});

export function startServer(app: Application, port: number | string): void {
    const server = app.listen(port, () => {
        logger.info(`Servidor iniciado en el puerto ${port}`);
        logger.info(`Endpoints disponibles:`);
        logger.info(`  GET    /products`);
        logger.info(`  GET    /products/:id`);
        logger.info(`  POST   /products`);
        logger.info(`  PUT    /products/:id`);
        logger.info(`  DELETE /products/:id`);
    });

    server.on('error', (error: NodeJS.ErrnoException) => {
        if (error.code === 'EADDRINUSE') {
            logger.error(`El puerto ${port} ya está en uso`);
        } else {
            logger.error('Error al iniciar el servidor:', error);
        }
        process.exit(1);
    });

    process.on('SIGTERM', () => {
        logger.info('Señal SIGTERM recibida, cerrando servidor...');
        server.close(() => {
            logger.info('Servidor cerrado');
            process.exit(0);
        });
    });

    process.on('SIGINT', () => {
        logger.info('Señal SIGINT recibida, cerrando servidor...');
        server.close(() => {
            logger.info('Servidor cerrado');
            process.exit(0);
        });
    });
}
```
