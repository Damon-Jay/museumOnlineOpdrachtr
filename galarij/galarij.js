// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const cuberoom = new Model('cube-room/cube-room.gltf');
cuberoom.setPosition(0, 0, 0);
cuberoom.setScale(-.5, 0.5, 0.5);
cuberoom.setRotation(-0.76, -36.95, 0);

// create a model
const painting = new Model('Painting/Paint.gltf');
painting.setPosition(0.999, 1.814, -2.335);
painting.setScale(-0.749, 0.749, 0.749);
painting.setRotation(-0.760, -36.950, 0.000);

// create an imageí
const image2 = new XRImage('Folkertdejongsl.jpg');
image2.setPosition(0.999, 1.814, -2.294);
image2.setRotation(0.000, -37.192, 0.676);
image2.setScale(1.397, 1.065, 1.500);

// create an imageí
const image = new XRImage('Lisse-043.jpg');
image.setPosition(2.318, 1.814, -0.074);
image.setRotation(0.000, -90.495, 0.676);
image.setScale(1.397, 1.065, 1.500);

// create a model
const painting2 = new Model('Painting/Paint.gltf');
painting2.setPosition(2.361, 1.789, -0.064);
painting2.setScale(-0.749, 0.749, 0.749);
painting2.setRotation(-0.197, 88.811, -0.119);

// create a model
const painting3 = new Model('Painting/Paint.gltf');
painting3.setPosition(-1.535, 1.837, -1.380);
painting3.setScale(-0.749, 0.749, 0.749);
painting3.setRotation(-0.169, 49.501, -0.001);

// create an imageí
const image5 = new XRImage('lisse-69.jpg');
image5.setPosition(-1.505, 1.860, -1.354);
image5.setRotation(0.014, -130.842, 0.676);
image5.setScale(1.397, 1.065, 1.500);

// create a 360 image
const image360 = new Sky('panorama.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-1, 2, 3.7);
spotLight.setTarget(cuberoom);
