# Verificación

Revisión del 29 de octubre de 2026, previa a la entrega para publicación por Bryan.

- `npm run build`: JavaScript válido.
- Chromium: escritorio y celular, sin errores de JavaScript.
- Sin desbordamiento horizontal en 360, 390, 540, 700, 768, 900, 1024, 1440 y 1920 px.
- Fotos y cuatro logos cargados. Logos comprobados visualmente, incluidos los fondos oscuros que necesitan Darko y JR Sánchez.
- Pestañas de servicios: selección con clic y navegación con flechas, Home y End.
- Menú móvil: apertura, cierre con enlace, cierre con Escape y restauración al cambiar a escritorio.
- Consulta: servicio preseleccionado, campos opcionales, resumen, edición sin pérdida de datos y rechazo de nombre/mensaje con solo espacios.
- Mensajes de WhatsApp y correo: destino de Olger correcto y texto codificado con acentos, signos y saltos de línea.
- Texto ingresado tratado como texto; no se interpreta HTML.
- Página de privacidad disponible, enlaces internos y recursos locales comprobados.
- Miniatura social de 1200 × 630 generada desde `preview/social-card.html`.
- Actualización Microsoft: logo corporativo oficial y cuatro iconos de aplicaciones cargados; presentación revisada en escritorio y celular. Mención de partner aportada por Bryan.
- Carrusel de clientes: movimiento real comprobado, pausa al pasar el cursor y controles de pausa/reanudación. La copia decorativa no introduce enlaces adicionales en la navegación de teclado.
- Servicios: avance automático de ocho segundos comprobado con tiempo real; pausa comprobada durante otro intervalo completo y detención al seleccionar una pestaña.
- Preferencia de reducir movimiento: recorrido automático desactivado y clientes estáticos sin duplicar los logos.
- Actualización comprobada a 360, 390, 700, 768, 1024 y 1440 px sin desbordamiento ni errores de JavaScript.
- Corrección de WhatsApp: `wa.me` falló por resolución DNS incluso fuera del sandbox. `api.whatsapp.com/send` y `web.whatsapp.com/send` respondieron HTTP 200. Todos los enlaces usan ahora estas rutas completas.
- Botones de WhatsApp comprobados con clics reales en Chromium de escritorio y en contexto móvil: barra superior, contacto, pie, botón flotante y resumen del formulario. Se verificaron destino, número 50683735850 y conservación de acentos/saltos/signos. La navegación externa se interceptó en la prueba; no se abrió una cuenta autenticada ni se enviaron mensajes.
- Sin JavaScript, los enlaces conservan la ruta completa oficial de WhatsApp.
- Ampliación de servicios: cinco pestañas, incluyendo videovigilancia CCTV; Windows, macOS y Linux visibles en soporte. La consulta de cámaras preselecciona el servicio y lo conserva en el mensaje de WhatsApp. Se revisaron los cinco paneles en 360, 390, 700, 768, 900, 1024 y 1440 px, sin desbordamiento ni errores de JavaScript.

No se enviaron consultas ni correos reales y no se publicó en Netlify. La persona que visita el sitio decide abrir WhatsApp o correo y realizar el envío. Las capturas de revisión se guardaron fuera del repositorio, en `/tmp/`.
