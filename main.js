//URL thingies
const urlParams = new URLSearchParams(window.location.search);
const urlString = urlParams.get('N');

//gridStuff
let xGraph = 0.6;
let yGraph = 0.6;
let gridContents = new Array(513);

//graph constants
let graphDimx = 812;
let graphDimy = 841;
let graphGridThing = graphDimy - 240;

//rounded coords
let roundedX, roundedY, pos;

//URL.split("o");

//selectionPanelStuff
let selectionPanelImageOrder = 4;
var selectedImg;

let cnv;

function preload() {
  imageInit();
}

function setup() {
  cnv = createCanvas(graphDimx, graphDimy);
  cnv.background(54, 57, 62);
  cnv.stroke(90);
  cnv.mouseClicked(clickedMouse);

  gridBorders();
  gridItself();

  selectionPanelRectangle();
  selectionPanelImages();

  if (urlString === null) {
    gridContents.fill('air');
  }
  else {
    gridContents = urlString.split(",");
  }
}

function draw() {
  gridBorders();
  gridItself();
  urlParams.set('N', gridContents.toString());
  window.history.replaceState(null, null, urlParams);
}

function clickedMouse() {
  roundedX = floor(mouseX / 30);
  roundedY = floor(mouseY / 30);
  pos = (roundedY * 27) + roundedX;

  if ((mouseX > 0) && (mouseX < graphDimx - 3) && (mouseY > 0) && (mouseY < graphGridThing - 35)) {
    console.log(roundedX + " " + roundedY);
    gridContentsManage();
  }
  else {
    console.log("selection panel");
    selectionPanelSelectionIndicator();
    selectionPanelImages();
  }
}
