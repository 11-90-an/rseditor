//URL thingies
let searchParamsThing = new URLSearchParams('bloks', 0);

//graph constants
let graphDimx = 812;
let graphDimy = 841;
let graphGridThing = graphDimy - 240;

//rounded coords
let roundedX = 0;
let roundedY = 0;

//gridStuff
let xGraph = 0.6;
let yGraph = 0.6;
const gridContents = new Array(513).fill('air');;
//URL.split("o");

//selectionPanelStuff
let selectionPanelImageOrder = 4;
var selectedImg;

function preload() {
  imageInit();
}

function setup() {
  createCanvas(graphDimx, graphDimy);
  background(54, 57, 62);
  stroke(90);

  gridBorders();
  gridItself();

  selectionPanelRectangle();
  selectionPanelImages();
}

function draw() {
  if (mouseIsPressed) {
    roundedX = floor(mouseX / 30);
    roundedY = floor(mouseY / 30);

    if ((mouseX > 0) && (mouseX < graphDimx - 3) && (mouseY > 0) && (mouseY < graphGridThing - 35) && mouseButton === LEFT) {
      console.log(roundedX + " " + roundedY);
      gridContentsManage();
    }
    else if ((mouseX >= 0) && (mouseX <= graphDimx - 3) && (mouseY >= graphGridThing - 10) && (mouseY <= graphDimy + 10)) {
      console.log("selection panel");
      selectionPanelSelectionIndicator();
      selectionPanelImages();
    }
    else {
      console.log("outside");
    }
  }
  gridBorders();
  gridItself();
}
