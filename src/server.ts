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