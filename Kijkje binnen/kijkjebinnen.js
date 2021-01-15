// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a 360 image
const image360 = new Sky('panorama.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-1, 2, 3.7);
spotLight.setTarget(cuberoom);
