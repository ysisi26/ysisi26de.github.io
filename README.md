# ¿Y si sí? - Drop 01 México 26

Prototipo frontend estático de tienda online para la primera colección de ¿Y si sí?

## Abrir

Abre `index.html` en el navegador. No requiere instalación ni servidor para funcionar.

## Editar contenido

Los productos, precios, fechas de preventa, coste de envío, FAQ y barra superior están al inicio de `app.js`.

Las imágenes del drop están en `assets/products/` y conservan los mockups originales usados para la preventa.

## Campaña

El sitio incorpora la campaña `¿Y si sí? Ya fue sí.` como narrativa principal del lanzamiento.

El mensaje comercial recomendado para pauta y redes es `Tres playeras para guardar el Mundial que nos hizo volver a creer`, destacando especialmente:

- Playera oversized negra - Águila 26
- Playera oversized - Cancha
- Playera oversized - Minimal 26

## Precios

Cancha y Minimal usan:

- Entrada evento/efectivo: `39,90 €`
- Preventa: `44,90 €`
- Venta regular: `49,90 €`

La playera negra Águila 26 está configurada como `A2 actual`:

- Entrada evento/efectivo: `59,90 €`
- Preventa: `69,90 €`
- Venta regular: `79,90 €`

Si se confirma A3, cambia `blackEaglePrintMode: "A2"` por `blackEaglePrintMode: "A3"` en `app.js`.

## Pedidos por correo

El checkout prepara un correo con el resumen del pedido usando `storeConfig.merchantEmail` en `app.js`.

Para recibir pedidos automáticos sin que el cliente abra su app de correo, conecta el formulario a un backend o servicio de formularios como Formspree, EmailJS, Shopify o WooCommerce.
