# 📦 Customizable 3D Cube Project

**[► View Live Demo](https://customizable-cube.vercel.app)**

This is an interactive 3D web experience built with **Three.js**. It renders a simple cube, but with a powerful debug UI that lets you customize its properties in real-time.

This project serves as a fantastic starting point for learning how to integrate Three.js with debug tools like `lil-gui` and animation libraries like `gsap`.

## ✨ Features

A control panel (powered by `lil-gui`) allows you to modify the cube on the fly:

* **Position:** Change the cube's `X` and `Y` position using sliders.
* **Visibility:** Toggle the cube on and off with a checkbox.
* **Wireframe:** Switch between a solid and wireframe view.
* **Color:** Use a color picker to change the cube's material color instantly.
* **Spin Animation:** Trigger a full 360-degree `gsap` animation with the click of a button.
* **Subdivisions:** Increase or decrease the cube's geometry subdivisions to see how it's constructed.

## 🎮 Controls

* **Click + Drag:** Rotate the camera around the cube (`OrbitControls`).
* **Scroll Wheel:** Zoom in and out.
* **Double-Click:** Enter or exit fullscreen mode.
* **Press 'h':** Show or hide the debug control panel.

## 🚀 Setup and Run Locally

To get this project running on your local machine, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    (Requires [Node.js](https://nodejs.org/en/download/))
    ```bash
    npm install
    ```

3.  **Run the local server:**
    This command will start a local server, usually at `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    This command will create a `dist/` directory with the optimized production files.
    ```bash
    npm run build
    ```

## 🛠️ Tech Stack

* **Core:** [Three.js](https://threejs.org/) (3D Graphics)
* **Debug UI:** [lil-gui](https://lil-gui.georgealways.com/) (Control Panel)
* **Animation:** [gsap](https://gsap.com/) (Spin Animation)
* **Build Tool:** [Vite](https://vitejs.dev/) (Local Dev Server & Bundling)
