// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const atlier = new Model('assets/models/Atlier/Atlier.gltf');
atlier.setPosition(-0.100, 0.800, -2.900);
atlier.setScale(-0.300, 0.300, 0.300);
atlier.setRotation(0, 0, 0);

// create a model
const table = new Model('assets/models/Table/table.gltf');
table.setPosition(1.355, 0.780, 0.255);
table.setScale(0.008, 0.008, 0.008);
table.setRotation(0, -58.766, 0);

// create an imageí
const image1 = new XRImage('assets/images/Folkertdejongsl.jpg');
image1.setPosition(1.349, 0.800, 0.230);
image1.setRotation(-88.909, 111.841, -170.724);
image1.setScale(1.023, 0.780, 1.500);

// create an imageí
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(2, 1.9, -1);
image2.setRotation(0, -39, -1);
image2.setScale(1.5, 1.5, 1.5);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(0, 0, 0);
cuberoom.setScale(-.5, 0.5, 0.5);
cuberoom.setRotation(-0.76, -36.95, 0);

// create some text
const lamText = new Text('Folkert De Jong');
lamText.setPosition(-0.1, 2.2, -2.9);
lamText.setFontsize(10);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, -38, 0);

// create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(2.686, 4.460, 11.532);
spotLight.setTarget(bios);
