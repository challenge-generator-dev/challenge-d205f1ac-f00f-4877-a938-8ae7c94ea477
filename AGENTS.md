# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de API REST para catálogo de productos**.

| | |
|---|---|
| Tema | Construcción de APIs REST con Express |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / Express 4.21 |
| Patron arquitectonico | capas estándar (ruta-handler-servicio-repositorio) |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`
- `Express como framework (vinculante: no mezcles otro framework del mismo ecosistema)`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @types/jest 30.0.0
- @types/supertest 7.2.1
- @types/winston 2.4.4
- express 4.22.3
- express-validator 7.3.2
- jest 30.5.2
- ts-jest 29.4.15
- ts-node 10.9.2
- winston 3.19.0
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición de endpoints y validación básica**: Documentación de los endpoints definidos y código que implementa la validación básica.
- **Fase 2 — Implementación de endpoints y manejo de errores**: Código que implementa los endpoints y maneja los errores de forma centralizada.
- **Fase 3 — Refactorización y optimización**: Código refactorizado y optimizado, con un manejo de errores mejorado.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/validators/product.validator.ts` — La fase "Definición de endpoints y validación básica" se implementa aqui: este archivo es el ejercicio.
- [ ] `src/middlewares/errorHandler.middleware.ts` — La fase "Implementación de endpoints y manejo de errores" se implementa aqui: este archivo es el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (11)

- `src/app.spec.ts`
- `package.json`
- `tsconfig.json`
- `src/models/product.model.ts`
- `src/repositories/product.repository.ts`
- `src/exceptions/http.exception.ts`
- `src/middlewares/errorHandler.middleware.ts`
- `src/validators/product.validator.ts`
- `src/main.ts`
- `src/app.ts`
- `src/server.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/controllers` (ausente)
- `src/services` (ausente)
- `src/repositories` (presente)
- `src/models` (presente)
- `src/middlewares` (presente)
- `src/utils` (ausente)
- `src/validators` (presente)
- `src/exceptions` (presente)
- `src/types` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (ruta-handler-servicio-repositorio)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: Construir endpoints REST con validacion y manejo de errores, Expone endpoints REST con validacion de entrada y manejo centralizado de errores
- Mision: Exponer el catalogo de productos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
