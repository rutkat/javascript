HTMLCanvasElement.prototype.relativeMouseCoords = function (event) {
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;
    
    do {
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    } 
    while (currentElement = currentElement.offsetParent) canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;
    canvasX = Math.round(canvasX * (this.width / this.offsetWidth));
    canvasY = Math.round(canvasY * (this.height / this.offsetHeight));

    return {
        x: canvasX,
        y: canvasY
    }
}