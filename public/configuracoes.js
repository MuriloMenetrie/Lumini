var colorPicker = new iro.ColorPicker(".colorPicker", {
  width: 175,
  color: "rgb(255, 0, 0)",
  borderWidth: 0,
  borderColor: "#fff",
});

var swatchGrid = document.getElementById("swatch-grid");

swatchGrid.addEventListener("click", function (e) {
  var clickTarget = e.target;
  // read data-color attribute
  if (clickTarget.dataset.color) {
    // update the color picker
    colorPicker.color.set(clickTarget.dataset.color);
  }
});
