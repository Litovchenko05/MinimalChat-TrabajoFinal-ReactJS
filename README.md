📬 Minimal Chat — React Project
================================

Este proyecto es una aplicación de mensajería desarrollada como parte de la entrega final del curso de Desarrollo en React JS impartida por la Universidad Tecnológica Nacional - Facultad Regional Buenos Aires.
La misma permite visualizar una lista de chats, seleccionar una conversación y enviar mensajes en tiempo real (solo a nivel frontend).

🚀 Tecnologías utilizadas
-------------------------

*   **React** (Vite)
    
*   **React Router**
    
*   **CSS nativo**
    
*   **JavaScript (ES2023)**
    

📦 Instalación
--------------

1.  Clonar el repositorio:
    ```bash
    https://github.com/Litovchenko05/MinimalChat-TrabajoFinal-ReactJS.git

2.  Instalar dependencias:
    ```bash
    npm install

3.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Abrir en el navegador la URL que indique la consola (por defecto suele ser: http://localhost:5173/)

    
📘 Uso de la aplicación
-----------------------

### ▶️ Pantalla inicial

*   Se muestra la lista de chats en el panel izquierdo.
    
*   Si no hay ningún chat seleccionado, se muestra una pantalla de bienvenida en el panel derecho.
    

### 💬 Chats

*   Al seleccionar un chat:
    
    *   Se abre su conversación.
        
    *   Aparece la barra superior con avatar, nombre y estado.
        
    *   En la parte inferior aparece la barra para escribir y enviar mensajes.
        
*   Los mensajes:
    
    *   Se muestran alineados a derecha o izquierda dependiendo de quién los envió.
        
    *   Se adaptan a múltiples líneas sin desbordarse.
        

### 📝 Crear un nuevo chat

*   En la parte inferior de la lista de chats hay un formulario para agregar nuevos chats.
    
*   Al crearlo, se agrega automáticamente al listado.
    

📱 Responsive Design
--------------------

La app está desarrollada con **CSS nativo respetando buenas prácticas**, utilizando:

*   Flexbox
    
*   Grid
    
*   Variables CSS globales para colores y fuente
    
*   Diseño responsive básico
    

En pantallas pequeñas la interfaz adapta su estructura.

🎨 Estilos
----------

*   Todos los estilos están implementados en archivos .css modulares.
    
*   Se utiliza un sistema global de variables en main.css para:
    
    *   Fuente (Lato)
        
    *   Paleta de colores
        
    *   Espaciados y bordes
        

📁 Estructura del proyecto
--------------------------

```bash 
src/
 ├── components/
 │    ├── ChatList/
 │    ├── ChatBar/
 │    ├── ConversationPanel/
 │    ├── MessageList/
 │    ├── MessageInput/
 │    ├── AddNewChat/
 │    └── WelcomePanel/
 ├── screens/
 │    ├── ChatScreen.jsx
 │    └── ChatScreen.css
 ├── App.jsx
 ├── main.jsx
 └── styles/
      └── main.css
```

📜 Licencia
-----------

Este proyecto se entrega únicamente con fines académicos.

🤝 Autor
--------

**Alexander Litovchenko**
