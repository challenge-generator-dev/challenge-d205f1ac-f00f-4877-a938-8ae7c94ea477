# Desarrollo de API REST para catálogo de productos

El equipo de desarrollo necesita una API REST que exponga el catálogo de productos de una tienda online. La API debe incluir endpoints para listar productos, obtener detalles de un producto por ID y manejar la validación de entradas y errores de forma centralizada. Los productos tienen atributos como nombre, precio, descripción y categoría. La API debe asegurar que los nombres de los productos no sean duplicados y que los precios no sean negativos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construcción de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de endpoints y validación básica

**Objetivo:** Definir los endpoints necesarios para el catálogo de productos y aplicar validación básica a las entradas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identifica los endpoints requeridos para listar productos y obtener detalles de un producto por ID.
- Implementa validación básica para asegurar que los nombres de los productos no sean duplicados y que los precios no sean negativos.

**Entregable:** Documentación de los endpoints definidos y código que implementa la validación básica.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar la API para que sea fácil de usar y mantener.
- Piensa en cómo manejar los errores de validación de forma centralizada.

</details>

### Fase 2: Implementación de endpoints y manejo de errores

**Objetivo:** Implementar los endpoints definidos y asegurar un manejo centralizado de errores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa los endpoints para listar productos y obtener detalles de un producto por ID.
- Asegura que la API maneje los errores de forma centralizada, proporcionando respuestas claras y útiles al cliente.

**Entregable:** Código que implementa los endpoints y maneja los errores de forma centralizada.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar el código para que sea fácil de mantener y escalar.
- Piensa en cómo proporcionar respuestas útiles al cliente en caso de error.

</details>

### Fase 3: Refactorización y optimización

**Objetivo:** Refactorizar el código para mejorar su legibilidad y rendimiento, y optimizar el manejo de errores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Refactoriza el código para mejorar su legibilidad y rendimiento.
- Optimiza el manejo de errores para asegurar que la API sea robusta y eficiente.

**Entregable:** Código refactorizado y optimizado, con un manejo de errores mejorado.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo refactorizar el código para que sea más fácil de entender y mantener.
- Piensa en cómo optimizar el rendimiento de la API sin comprometer su fiabilidad.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cómo se usan en una API?
- **paraQueSirve**: ¿Para qué sirven la validación de entradas y el manejo centralizado de errores en una API REST?
- **comoSeUsa**: ¿Cómo se implementan los endpoints REST en una API usando el marco de trabajo del lenguaje principal?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la refactorización y optimización de una API REST?

## Criterios de Evaluacion

- Definición correcta de endpoints REST para el catálogo de productos.
- Implementación de validación básica para entradas de productos.
- Manejo centralizado de errores en la API.
- Refactorización y optimización del código para mejorar legibilidad y rendimiento.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
