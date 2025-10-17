import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui' 
import gsap from 'gsap'

// GUI debug Customization
const gui = new GUI({
    width: 300,
    title: 'Nice debug UI',
    closeFolders: false
})
// gui.close()
// gui.hide()
window.addEventListener('keydown', (e) => {
    if(e.key == 'h')
        gui.show(gui._hidden)
})

// Reference color object
const debugObject = {
    color: '#a778d8'
}

// Cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - (e.clientY / sizes.height - 0.5)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)
const material = new THREE.MeshBasicMaterial({ color: debugObject.color, wireframe: true })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Tweak Folder
const cubeTweaks = gui.addFolder('Awaesome tweaks')
// cubeTweaks.hide()

// x position tweak
cubeTweaks.add(mesh.position, 'x', -2, 2, 0.01).name('x position')

// y position tweak
cubeTweaks.add(mesh.position, 'y', -2, 2, 0.01).name('y position')                        // Parameters: Object, Property, Min, Max, Step
// Another way to add a gui
// cubeTweaks.add(mesh.position, 'y').min(-2).max(2).step(0.01).name('elevation')

// Checkbox tweak
cubeTweaks.add(mesh, 'visible')

//wireframe tweak
cubeTweaks.add(material, 'wireframe')

// color tweak
cubeTweaks.addColor(debugObject, 'color').onChange(() => {
    material.color.set(debugObject.color)
})

// Spinning tweak
debugObject.spin = () => {
    gsap.to(mesh.rotation, { y: mesh.rotation.y + Math.PI * 2, duration: 1, ease: 'power1.inOut' })
}
cubeTweaks.add(debugObject, 'spin')

// Segmentation tweak
debugObject.subdivision = 2
cubeTweaks.add(debugObject, 'subdivision').min(1).max(20).step(1).onFinishChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.BoxGeometry(
        1, 1, 1,
        debugObject.subdivision, debugObject.subdivision, debugObject.subdivision
    )
})

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Resizing
window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // Update aspect
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update Renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Full-screen (Without using Prefixes -- But using prefixes are considered as good practices)
window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})

// Camera
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1*aspectRatio, 1*aspectRatio, -1, 1, 0.1, 100)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.z = 3
// camera.position.x = 2
// camera.position.y = 2
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animation loop
const animate = () => {
    window.requestAnimationFrame(animate)
    // mesh.rotation.y += 0.02
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(mesh.position)

    // Update controls
    controls.update()

    renderer.render(scene, camera)
}
animate()
