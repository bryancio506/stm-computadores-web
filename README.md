# STM Computadores

Sitio público: https://stm-computadores.netlify.app/

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
4. Publique desde su propia cuenta de Netlify. La publicación inicial la realizó Bryan desde su cuenta de Netlify.
5. El dominio `stm-computadores.netlify.app` ya está configurado en canonical, `og:url`, `og:image`, `og:image:secure_url` y `twitter:image` dentro de `dist/index.html`. Actualice esas etiquetas si cambia el dominio. La imagen social es `assets/compartir-stm.jpg`.

También puede subir directamente el contenido de `dist/` a Netlify Drop.

## Canal de consultas

- **WhatsApp de Olger:** +506 8373-5850.
- **Correo:** olgermr@stmcomputadores.com.
- **Oficina:** +506 2293-8058.
- Cada solución permite seleccionar el servicio dentro del formulario.
- El formulario prepara un resumen y enlaces a WhatsApp o al correo del visitante. La persona revisa y realiza el envío. No hay envíos automáticos, almacenamiento de contactos ni backend.
- Los campos de correo, teléfono y empresa son opcionales; nombre, servicio, mensaje y consentimiento son obligatorios.
- `dist/privacidad.html` explica el tratamiento del formulario y los servicios externos.
- Los botones abren WhatsApp Web directamente en computadora y el enlace oficial `api.whatsapp.com/send` en celular. También hay enlaces completos sin JavaScript. Se evita el dominio corto `wa.me`, que no resolvía en la red usada durante la revisión.

No hay WhatsApp simulado ni mensajes enviados por el sitio. Antes de anunciar campañas, conviene probar los enlaces con el dispositivo que usará el visitante y confirmar que los datos comerciales siguen vigentes.

## Microsoft y carruseles

- El carrusel reúne cinco soluciones: soporte técnico multiplataforma, redes, videovigilancia CCTV, Microsoft 365 y datos/automatización. Windows, macOS y Linux se destacan en el soporte para mantener compacto el diseño.
- La portada y la sección de Microsoft 365 destacan la relación de STM como **partner de Microsoft**, confirmada por Bryan. El logo corporativo y los iconos de Outlook, Teams, OneDrive y SharePoint se conservan tal como se descargaron de Microsoft.
- Los logos de clientes se desplazan en bucle; se pueden pausar con el botón, al pasar el cursor o al enfocar un enlace.
- El panel de servicios avanza cada ocho segundos cuando está visible. Se pausa al pasar el cursor o enfocar contenido; seleccionar una pestaña detiene el avance hasta que se active de nuevo.
- La preferencia del sistema de reducir movimiento desactiva el desplazamiento y el recorrido automático de forma predeterminada.
- Procedencia de los recursos: `docs/fuentes-microsoft.md`. La mención de partner es texto comercial; no se añadió un sello de certificación o categoría específica.

## Edición

- `dist/index.html`: textos, servicios, contactos y SEO.
- `dist/styles.css`: identidad, ilustraciones hechas con CSS y adaptación móvil.
- `dist/app.js`: navegación móvil, pestañas accesibles, preselección y consulta.
- `dist/assets/`: logo STM, logos oficiales de clientes, fotos y miniatura social.
- `docs/fuentes.md` y `docs/fuentes-logos.md`: procedencia del contenido público y los recursos.
- `preview/social-card.html`: diseño editable de la miniatura social; no se publica.

El proyecto es independiente de la carpeta de trabajo de STM. El repositorio contiene exclusivamente los archivos del sitio; no incluye los análisis internos, reportes de soporte ni documentación de clientes.
