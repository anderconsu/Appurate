# APPÚRATE

## Plataforma de Educación y Monitoreo de Calidad del Agua de la Ría de Bilbao

Este repositorio de GitHub contiene información detallada sobre el proyecto Appúrate. A lo largo de este README, proporcionaremos una descripción de cada etapa del proyecto, desde la presentación inicial hasta la implementación técnica.

## Presentación y Briefing

El proyecto Appúrate se originó a raíz de una reunión de colaboración con AQUADAT el 15 de septiembre. Durante esta reunión, se identificaron desafíos relacionados con la calidad del agua en la Ría de Bilbao, se definieron los objetivos clave del proyecto y se nos dio **dos semanas** para llevarlo a cabo.

## Estrategia, Creatividad y Viabilidad del Proyecto

Después de un fin de semana de investigaciones intensivas, los equipos FullStack, UX/UI y Data presentaron sus hallazgos y soluciones creativas el 18 de septiembre. Se destacaron tres conclusiones fundamentales:

1. **Falta de Data:** Se identificó la falta de datos como un obstáculo significativo.
2. **Necesidad de Implicación de la Sociedad:** Se resaltó la importancia de involucrar a la comunidad en la solución.
3. **Concienciación de las Nuevas Generaciones:** Se enfatizó la necesidad de educar a las generaciones más jóvenes sobre la problemática.

## Diseño y Sitemaps junto a UX/UI

Para abordar estas conclusiones, se diseñó una plataforma educativa que permitiría a los estudiantes participar activamente en la recopilación de muestras de agua y el análisis de su calidad. Se desarrollaron sitemaps para la plataforma web y móvil, asegurando la accesibilidad para todos los usuarios interesados en la calidad del agua de la Ría de Bilbao.

## Front-End

Para la creación de la interfaz de usuario, hemos optado por **React** y **Vite** para lograr un desarrollo eficiente y dinámico. Se ha aplicado un enfoque centrado en la experiencia del usuario, utilizando **SASS** y **CSS** para el diseño visual y asegurando la adaptabilidad a dispositivos móviles mediante **Media Queries**.

Facilitamos el registro de usuarios a través de un portal de acceso para organizaciones colaboradoras, garantizando un proceso eficiente y controlado.

La seguridad y privacidad de los datos se mantienen a través de un acceso restringido a la parte privada de la plataforma, habilitado solo después de una exitosa autenticación.

La flexibilidad en la gestión de coordenadas de puntos de recogida de aguas permite una escalabilidad ágil. Por razones de seguridad, no almacenamos contraseñas en el almacenamiento local del navegador, sino información básica y un token de autenticación.

## Back-End

Para el desarrollo del backend, hemos seleccionado **Node.js** en conjunto con **Express** como el marco de trabajo principal. **Node.js** facilita la ejecución de JavaScript en el servidor, y **Express** proporciona un marco de trabajo flexible y minimalista.

En cuanto a la seguridad, hemos implementado una estrategia de autenticación propia, utilizando la biblioteca **Bcrypt** para cifrar las contraseñas de los usuarios. Las contraseñas nunca se almacenan en texto plano en la base de datos. La identidad de los usuarios se verifica mediante un token de sesión (**JWT**) válido por 24 horas.

Nuestra base de datos está respaldada por **MongoDB**, un sistema **NoSQL**, que ofrece flexibilidad y escalabilidad. Hemos implementado dos esquemas de base de datos: uno para usuarios y credenciales, y otro para el registro de muestras, garantizando una organización eficiente de los datos.

La **API** de registro de muestras interactúa con el equipo de Data Science y permite el almacenamiento de resultados junto con los datos de la muestra. Solo los usuarios con tokens de sesión válidos pueden registrar muestras. La información de las muestras es accesible a través de la **API** mediante varios endpoints para filtrar y acceder a los datos de manera efectiva.

## Deployment

En nuestro proceso de despliegue, utilizamos **Docker** como herramienta clave para empaquetar nuestra aplicación en **contenedores**, simplificando así la implementación y escalabilidad. Esto añade una capa adicional de seguridad al encapsular las conexiones entre contenedores, protegiendo la confidencialidad de los datos.

Para garantizar la seguridad y el rendimiento, confiamos en **Cloudflare** para la gestión de dominios y protección de conexiones, ofreciendo protección contra amenazas y entregas de contenido rápidas y seguras.

Además, implementamos **Nginx Proxy Manager** en el servidor para enrutar conexiones y gestionar certificados de seguridad eficientemente, lo que habilita **HTTPS** para conexiones cifradas, mejorando la privacidad, confiabilidad e integridad de la información en nuestra plataforma.

## Equipo

**FullStack:**

-   Ander Consuegra

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fanderconsu%2F)](https://www.linkedin.com/in/anderconsu/)
    [![Github](https://img.shields.io/badge/Github-grey?logo=github&link=https%3A%2F%2Fgithub.com%2Fanderconsu)](https://github.com/anderconsu/anderconsu)
    [![Portfolio](https://img.shields.io/badge/Portfolio-black?logo=superuser&logoColor=white&link=https%3A%2F%2Fcloudconsu.com)](https://cloudconsu.com/)

-   Nacho Prado

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nachoprado/)
    [![Github](https://img.shields.io/badge/Github-grey?logo=github)](https://github.com/nachoprado86)

-   Endika Acedo

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/endika-acedo-gonz%C3%A1lez-432a1828b/)
    [![Github](https://img.shields.io/badge/Github-grey?logo=github)](https://github.com/Endika7593)

**Data Science:**

-   Alejo Sotillo

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alejosotillo/)
    [![Github](https://img.shields.io/badge/Github-grey?logo=github)](https://github.com/socho8)

-   Leonor Rodriguez

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonor-rodman/)
    [![Github](https://img.shields.io/badge/Github-grey?logo=github)](https://github.com/Leoorodrii)

**UX/UI:**

-   Irati Lozano

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/irati-lozano-segovia/)

-   Oscar Ciencia

    [![LindedIn](https://img.shields.io/badge/LinkedIn-%230e76a8?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oscar-ciencia-86989a28/)

-   Sebastian

**Contacto:**

-   [appurate.org@gmail.com](mailto:appurate.org@gmail.com)
