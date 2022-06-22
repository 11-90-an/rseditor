function selectionPanelImages() {
  let selectionPanelX = 10
  let selectionPanelY = graphGridThing - 20;

  for (const blockNames of imageMap.keys()) {
    image(imageMap.get(blockNames), selectionPanelX, selectionPanelY, 30, 30);
    selectionPanelX = selectionPanelX + 40;
    if (selectionPanelX >= 790) {
      selectionPanelY = selectionPanelY + 40;
      selectionPanelX = 10;
    }
  }
}

function selectionPanelSelectionIndicator() {
  let selectionPanelImageX = floor(mouseX / 40);
  let selectionPanelImageY = floor((mouseY - 20) / 40);

  selectionPanelRectangle();
  
  fill(80,84,92);
  rect((selectionPanelImageX * 40) + 6, (selectionPanelImageY * 40) + 17, 38, 38, 5);
  selectionPanelImageOrder = ((selectionPanelImageY - 14) * 20) + selectionPanelImageX;
  selectedImg = imageMap.get(blockNames[selectionPanelImageOrder]);
  
  console.log(selectionPanelImageOrder);
}

function selectionPanelRectangle() {
  fill(54, 57, 62);
  rect(0.6, graphGridThing - 30, graphDimx - xGraph - 1, graphDimy - graphGridThing + 10);
}
