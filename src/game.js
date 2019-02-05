//functions
function tick() { //main loop
    //console.time("loop");
    drawGrid();
    updateGrid();

    //console.timeEnd("loop");
    requestAnimationFrame(tick);
}

function createArray(rows) { //creates a 2 dimensional array of required height
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr;
}

function fillSmall() { //fill the grid randomly in a small box
    for (var j = 100; j < gridHeight - 100; j++) { //iterate through rows
        for (var k = 100; k < gridWidth - 100; k++) { //iterate through columns
            currentGrid[j][k] = Math.round(Math.random());
        }
    }
}

function drawGrid() { //draw the contents of the grid onto a canvas
    var liveCount = 0;
    ctx.clearRect(0, 0, gridHeight, gridWidth);            //this should clear the canvas ahead of each redraw
    for (var j = 1; j < gridHeight; j++) {                 //iterate through rows
        for (var k = 1; k < gridWidth; k++) {              //iterate through columns
            if (currentGrid[j][k] === 1) {
                ctx.fillRect(j, k, 1, 1);
                  liveCount++;

            }
        }
    }

    var liveCountD = liveCount/100;
    console.log(liveCountD);

    // previous experiments with this grid size determined that after 20 we are likely done, so we will use that for our test
    // if the livecount/100 has not changed , the population has equalized, no more death of life, so we can stop

    if (liveCountD < 20) {
      console.log('Population Has Stabilized, stop Draw Grid');
      throw "We are done drawing the grid";
    }

}
