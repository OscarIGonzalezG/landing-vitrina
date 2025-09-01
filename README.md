# 🪞 Vitrina Vintage

Landing page desarrollada con **Angular** y estilo **vintage**, donde se muestran productos destacados en formato de tarjetas interactivas.  
Al hacer clic en una tarjeta se despliega un modal con la información completa del producto, usando animaciones suaves para una mejor experiencia.  

---

## 🚀 Características

- 🎨 Diseño **vintage** con tipografías y colores personalizados.  
- 🖼️ **Cards de productos** con hover elegante.  
- 🔍 **Modal animado** al abrir un producto, con efecto **pop-in / pop-out**.  
- 📱 **Responsive**: se adapta a móviles, tablets y pantallas grandes.  
- 💬 **Formulario de contacto** conectado con **EmailJS** para enviar mensajes.  
- 🔔 **Alertas personalizadas** (centradas y animadas) para feedback del usuario.  

---

## 🛠️ Tecnologías utilizadas

- [Angular](https://angular.dev/) (v17+)
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [EmailJS](https://www.emailjs.com/) para envío de correos sin backend
- [TypeScript](https://www.typescriptlang.org/)
- [Vite / Angular CLI] según configuración de build

---

## 📂 Estructura del proyecto

```
src/
 ├── app/
 │   ├── shared/
 │   │   ├── product-card/       # Tarjetas de producto
 │   │   ├── product-modal/      # Modal con detalle del producto
 │   │   ├── alert/              # Componente de alertas personalizadas
 │   ├── pages/
 │   │   ├── home/               # Página principal
 │   │   ├── contact/            # Formulario de contacto
 │   ├── interfaces/             # Definiciones de datos
 │
 ├── assets/
 │   ├── images/                 # Imágenes de productos
 │
 ├── styles.css                  # Variables globales y Tailwind
```

---

## ⚙️ Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/landing-vitrina.git
cd landing-vitrina
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
ng serve
```

Abrir en el navegador:  
👉 [http://localhost:4200](http://localhost:4200)

---

## 🌐 Despliegue

El proyecto está desplegado en **GitHub Pages**:  
👉 [Demo en línea](https://oscarigonzalezg.github.io/landing-vitrina/)

---

## 📧 Configuración de EmailJS

1. Crear una cuenta en [EmailJS](https://www.emailjs.com/).
2. Generar:
   - **Service ID**
   - **Template ID**
   - **Public Key**
3. Configurarlos en el componente de contacto (`contact.component.ts`).

---

## 🤝 Contribución

Si deseas aportar mejoras:

1. Haz un fork del proyecto.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m "Agrega nueva funcionalidad"`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📜 Licencia

© 2025 - Desarrollado por **Oscar Gonzalez**  
Este proyecto es de uso libre para fines personales y educativos.  
Queda prohibido el uso con fines comerciales sin autorización del autor.

---
✨ Creado con dedicación para aprender y mostrar productos en una **vitrina digital**.
