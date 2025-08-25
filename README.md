# ChronosFit Turnos

Una aplicación web simple para gestionar reservas de clases de entrenamiento funcional. Los usuarios pueden introducir su nombre y número de celular, seleccionar uno o más horarios disponibles y confirmar su reserva. La interfaz muestra el grado de ocupación de cada turno y evita que se seleccionen clases que estén completas.

## Funcionalidades principales

- **Selección de horarios:** muestra una lista de horarios (8 hs, 9 hs, etc.) con su capacidad y ocupación actual. Los usuarios pueden marcar los turnos que deseen reservar.
- **Validación de datos:** el botón de reserva solo se habilita cuando el usuario ha ingresado un nombre, un teléfono y al menos un horario.
- **Barra de progreso:** cada turno muestra una barra de progreso que indica el porcentaje de ocupación.
- **Confirmación de reserva:** al hacer clic en «Reservar» se presenta un modal con el resumen de la reserva (nombre, teléfono y horarios). Tras confirmar, se actualizan las ocupaciones y se limpian los campos.
- **Estilo responsivo:** la interfaz está diseñada para funcionar en dispositivos móviles con un esquema de colores oscuro y acentos en ámbar.

## Cómo usar

1. Abre `index.html` en tu navegador web. Si la estás alojando en GitHub Pages o Vercel, simplemente visita el enlace correspondiente.
2. Introduce tu nombre y tu número de celular (WhatsApp).
3. Selecciona uno o más horarios disponibles.
4. Haz clic en **Reservar** para revisar tu selección y confirmar la reserva.

## Estructura del proyecto

```
chronosfit-app/
├── index.html    # Página principal de la aplicación
├── styles.css    # Estilos de la interfaz
├── script.js     # Lógica de la aplicación en JavaScript
├── logo.png      # Logotipo de ChronosFit
└── README.md     # Documentación del proyecto
```

## Despliegue en GitHub Pages

Para mostrar la aplicación desde tu celular, puedes subir este repositorio a GitHub y habilitar GitHub Pages:

1. Crea un repositorio nuevo en tu cuenta de GitHub y sube los archivos de `chronosfit-app`.
2. Ve a la configuración del repositorio, sección **Pages**.
3. Selecciona la rama principal (por ejemplo `main`) y el directorio raíz (o `/` si se usa la configuración por defecto).
4. Guarda los cambios y espera unos segundos a que GitHub genere la página. Aparecerá un enlace tipo `https://tu_usuario.github.io/nombre-del-repo`.

Ahora podrás abrir ese enlace desde cualquier celular y compartirlo con tus clientes.
