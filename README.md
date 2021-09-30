# Proyecto Trivia
Nuestro proyecto trata sobre la construcción de la aplicación de una pagina web de  una Trivia, utilizando JavaScript, HTML, CSS. 
## Proceso de Diseño 📋
Nuestro primer paso fue hacer el prototipo utilizando la herramienta
[Crello](https://crello.com/es/pro/?gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI-51vCMHSqMwMVIZobKWN7XLd3Ffq4FV7lrZsw2OMS8aGiMlz3gcFIaAv3AEALw_wcB), la cual mostraba el diseño de la Trivia.
![Nuestra primera pantalla](https://replit.com/@fioazahuanche/ProyectoTrivia#Prototipo/page-1.jpeg)
Una vez realizado el diseño pasamos a trabajar con una herramienta de edición de código en línea: [Replit](https://replit.com/~).

## Etapas del proyecto 🚀
Para la construcción del proyecto se realizó por etapas; estas etapas las llamamos Hitos. En todos los hitos se usó solo Javascript y HTML, ya que era una version sencilla  de nuestra Trivia.
### Hito 1 
Para lograr el hito1 se dividió en los miniproyectos A,B y C.

#### Miniproyecto A
- Mostrar el esqueleto estático que consistía de dos preguntas con sus alternativas.
-Se usó los input type radio para las alternativas y el botón de ver resultados el input type button.

### Miniproyecto B
- Pudimos darle algo de interacción usando el onclick, que llamaba a una función en el Javascript, dentro de las instrucciones de la función mostarabamos un mensaje con el alert.
### Miniproyecto C
- Mostrar en una sola pantalla dos preguntas con 3 alternativas de respuesta cada una y el botón para responder.
- El botón de responder permitía al usuario ver la alternativa correcta. No te decía si acertaste o no, solo decía cuales eran las alternativas correctas.

### Hito 2 
- Agregamos una pantalla de bienvenida, la cual pedia tu nombre y luego te saludaba con tu nombre.
- Se creó secciones dentro del HTML.
- En este hito el botón de responder mostraba la alternativa correcta para cada pregunta y mostraba si cada pregunta era correcta o incorrecta usando el if else.
- Por útlimo el botón de "Jugar Denuevo" era un input de tipo button donde el onclick refrescaba la página para regresar a la pantalla inicial.

### Hito 3 
- Se uso el mismo código utilizado en el Hito 2 con la diferencia de que le agregamos dos tipos de pregunta, que serían Turismo y Cultura.
- Para acceder a las preguntas se crearon 2 botones con input type button.
- Una vez seleccionado el tema se presiona el botón de ver resultados y muestra el mensaje con el puntaje total obtenido.
- En nuestra Trivia por respuesta correcta te adiciona 10 puntos y por respuesta incorrecta te resta 2 puntos.

Concluidos todos los Hitos se pasó a dar style con CSS.

## Construido con ⌨️
Las herramientas que utilizamos para crear nuestro proyecto fueron:n
- Crello - para el prototipo
- Replit - para HTML, JS,CSS
- Google Fonts - para los tipos de fuentes

### Cambios en el proceso 🛠️
El diseño incial cambió a medida que se trabajaba en la elaboración del Proyecto. 
Los cambios consistieron en: 

1. Los colores: al inicio nuestras dos primeras pantallas eran con fondo de color blanco y las preguntas de color celeste, decidimos tener el mismo fondo para todas nuestras pantallas que en este caso sería celeste. 
2. La fuente: en el prototipo usamos distintas fuentes tanto para títulos, preguntas, alternativas y botones. Con el uso de CSS pudimos utilizar dos fuentes distintas que consideramos eran amigables para la vista del usuario.
3. Las imágenes: Al incio cada pregunta mostraba una imagen, pero ahora solo se muestra una imagen al inicio de pantalla, debido a que las preguntas se muestran en una sola pantalla y no contabamos con el espacio necesario.