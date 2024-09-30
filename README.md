# React + Vite

Introducción
En la era digital, las redes sociales han cambiado la forma en que nos comunicamos y compartimos experiencias. Sin embargo, MoveTogether surge como una plataforma única diseñada específicamente para satisfacer las necesidades de los deportistas.

MoveTogether es una red social dedicada a aquellos que comparten una pasión por el deporte. La plataforma permite a los usuarios:

Crear perfiles personalizados.
Seleccionar los deportes que practican.
Recibir sugerencias de actividades basadas en sus preferencias, ubicación y tiempo disponible.
Generar rutas fáciles para actividades como trotar, patinar o andar en bicicleta.
Además de ser una herramienta para organizar y disfrutar de actividades físicas, MoveTogether fomenta la creación de comunidades activas y saludables, promoviendo conexiones significativas entre deportistas.

Las tecnologías empleadas en el desarrollo de MoveTogether incluyen:

JavaScript junto con el framework React.js para el desarrollo del frontend.
Node.js con Express para el backend.
TailwindCSS como framework de diseño para una experiencia de usuario moderna y responsiva.
MongoDB como base de datos para almacenar y gestionar los datos de los usuarios y sus actividades.
Arquitectura del Proyecto
La arquitectura de MoveTogether sigue el patrón MVC (Model-View-Controller), separando la aplicación en Modelo, Vista, y Controlador para facilitar la organización y escalabilidad. Además, la aplicación incluye un sistema de publicaciones y comunidades similar a Facebook y Twitter.

1. Modelo (Model)
Base de datos utilizada: MongoDB.
Descripción: El Modelo representa los datos y las reglas de negocio. Se utilizan esquemas de MongoDB para almacenar:
Información de los usuarios (perfiles, preferencias deportivas).
Publicaciones de los usuarios donde pueden compartir texto e imágenes.
Comunidades que los usuarios pueden crear, unirse y donde pueden interactuar mediante publicaciones.
Responsabilidad: Define la estructura de los datos y gestiona las operaciones CRUD para usuarios, publicaciones y comunidades. Mongoose es utilizado para definir los esquemas de las publicaciones, usuarios y comunidades.
2. Vista (View)
Framework utilizado: React.js.
Descripción: La Vista maneja la interacción del usuario, permitiéndoles crear y visualizar publicaciones, unirse a comunidades y compartir sus actividades deportivas. Usa React.js para ofrecer una experiencia dinámica y TailwindCSS para asegurar un diseño adaptable.
Responsabilidad: Proporcionar una interfaz que permita a los usuarios gestionar sus perfiles, crear publicaciones, unirse y participar en comunidades. La Vista consume la API REST para enviar y recibir datos del Controlador.
3. Controlador (Controller)
Framework utilizado: Node.js con Express.
Descripción: El Controlador maneja la lógica de negocio y actúa como intermediario entre el Modelo y la Vista. Gestiona las solicitudes de la Vista para crear, leer, actualizar o eliminar publicaciones y comunidades, además de coordinar las interacciones entre los usuarios y estas funcionalidades.
Responsabilidad:
Publicaciones: Gestionar la creación y visualización de publicaciones, como la interacción con ellas (comentarios, likes).
Comunidades: Permitir a los usuarios crear comunidades, unirse a ellas, y ver o interactuar con publicaciones dentro de las mismas.
Mensajes: Permite a los usuarios interactuar entre ellos mediante el envío de mensajes en un chat a tiempo (casi) real.
Coordinar las solicitudes HTTP para garantizar que los datos sean validados correctamente antes de enviarse al Modelo para su almacenamiento o recuperación.
Comunicación entre Capas
API REST: La Vista se comunica con el Controlador mediante solicitudes HTTP para manejar publicaciones y comunidades, además de la interacción general con el sistema.
Autenticación y Seguridad: Las rutas protegidas (como la creación de publicaciones o la gestión de comunidades) requieren autenticación mediante JWT. Además, se asegura que las entradas sean validadas usando express-validator.
Guía de Configuración
Esta guía describe los pasos para configurar y ejecutar MoveTogether en un entorno local.

1. Requisitos previos
Antes de empezar, asegúrate de tener instalados los siguientes elementos en tu máquina:

Node.js (versión 14 o superior): Descargar NodeJS 
MongoDB (versión 4.0 o superior): Descargar MongoDB 
Git: Descargar Git 
Un editor de código (se recomienda VSCode)
2. Clonar los repositorios
Clona los repositorios desde GitHub: Repositorio del Frontend  Repositorio del Backend 

3. Instalar las dependencias
El proyecto utiliza Node.js con npm para la gestión de paquetes. Asegúrate de instalar todas las dependencias tanto para el frontend como para el backend, con el comando npm install.

4. Configurar variables de entorno
PORT: 5000
MONGO_URI= mongodb://localhost:27017/movetogether
JWT_SECRET= tu_clave_secreta
JWT_EXPIRES_IN= 1h
EMAIL_USER= tu_email@example.com
EMAIL_PASS= tu_contraseña
5. Ejecutar MongoDB
Si no tienes un servicio de MongoDB ya corriendo, puedes iniciar MongoDB de manera local:
mongod --dbpath <ruta_donde_guardar_datos>

6. Ejecutar el backend
Una vez configuradas las variables de entorno y con MongoDB corriendo, navega al directorio del backend y ejecuta el servidor con el comando: npm start
El backend se ejecutará en http://localhost:5000 .

7. Ejecutar el frontend
Navega al directorio del frontend y ejecuta la aplicación React con el comando: npm run dev

8. Probar la aplicación
Abre un navegador y visita http://localhost:3000  para acceder a MoveTogether en tu entorno local. Puedes registrarte, iniciar sesión y utilizar las funcionalidades de la aplicación.
