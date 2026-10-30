# STM Computadores

Landing comercial de STM, con la identidad original, soluciones para empresas y contacto directo con Olger Murillo. HTML, CSS y JavaScript estáticos, sin dependencias de producción.

## Ver localmente

```sh
npm run dev
# http://localhost:4174
```

`npm run check` valida el JavaScript. `npm run build` ejecuta la misma comprobación; los archivos publicados están directamente en `dist/`.

## Conectar GitHub con Netlify

1. En Netlify, seleccione **Add new project → Import an existing project → GitHub**.
2. Seleccione `bryancio506/stm-computadores-web` y la rama `main`.
3. Use `npm run build` como comando de construcción y `dist` como directorio de publicación. `netlify.toml` ya declara ambos.
4. Publique desde su propia cuenta de Netlify. No se configuró ni ejecutó un despliegue desde este proyecto.
5. Una vez elegido el dominio, añada su URL completa en canonical, `og:url`, `og:image`, `og:image:secure_url` y `twitter:image` dentro de `dist/index.html`. La imagen social es `assets/compartir-stm.jpg`.

También puede subir directamente el contenido de `dist/` a Netlify Drop.

## Canal de consultas

- **WhatsApp de Olger:** +506 8373-5850.
- **Correo:** olgermr@stmcomputadores.com.
- **Oficina:** +506 2293-8058.
- Cada solución permite seleccionar el servicio dentro del formulario.
- El formulario prepara un resumen y enlaces a WhatsApp o al correo del visitante. La persona revisa y realiza el envío. No hay envíos automáticos, almacenamiento de contactos ni backend.
- Los campos de correo, teléfono y empresa son opcionales; nombre, servicio, mensaje y consentimiento son obligatorios.
- `dist/privacidad.html` explica el tratamiento del formulario y los servicios externos.

No hay WhatsApp simulado ni mensajes enviados por el sitio. Antes de anunciar campañas, conviene probar los enlaces con el dispositivo que usará el visitante y confirmar que los datos comerciales siguen vigentes.

## Edición

- `dist/index.html`: textos, servicios, contactos y SEO.
- `dist/styles.css`: identidad, ilustraciones hechas con CSS y adaptación móvil.
- `dist/app.js`: navegación móvil, pestañas accesibles, preselección y consulta.
- `dist/assets/`: logo STM, logos oficiales de clientes, fotos y miniatura social.
- `docs/fuentes.md` y `docs/fuentes-logos.md`: procedencia del contenido público y los recursos.
- `preview/social-card.html`: diseño editable de la miniatura social; no se publica.

El proyecto es independiente de la carpeta de trabajo de STM. El repositorio contiene exclusivamente los archivos del sitio; no incluye los análisis internos, reportes de soporte ni documentación de clientes.
