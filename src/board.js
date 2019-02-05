function updateGrid() { //perform one iteration of grid update

    for (var j = 1; j < gridHeight - 1; j++) { //iterate through rows
        for (var k = 1; k < gridWidth - 1; k++) { //iterate through columns
            var totalCells = 0;

            //add up the total values for the surrounding cells - the 8 cells around it


            totalCells += currentGrid[j - 1][k - 1]; //top left      [.][ ][ ]
            totalCells += currentGrid[j - 1][k]; //top center        [ ][.][ ]
            totalCells += currentGrid[j - 1][k + 1]; //top right     [ ][ ][.]

            totalCells += currentGrid[j][k - 1]; //middle left       [.][ ][ ]
            totalCells += currentGrid[j][k + 1]; //middle right      [ ][ ][.]

            totalCells += currentGrid[j + 1][k - 1]; //bottom left   [ ][ ][ ]
            totalCells += currentGrid[j + 1][k]; //bottom center     [ ][.][ ]
            totalCells += currentGrid[j + 1][k + 1]; //bottom right  [ ][ ][.]


            //apply the rules to each cell
            switch (totalCells) {
                case 2:
                    newGrid[j][k] = currentGrid[j][k];

                    break;
                case 3:
                    newGrid[j][k] = 1; //cell is living!

                    break;
                default:
                    newGrid[j][k] = 0; //
            }
        }
    }

    //mirror edges to create wraparound effect  - this is interesting, it pushes off canvas, to wrap around the other side, like an old video game

    for (var l = 1; l < gridHeight - 1; l++) { //iterate through rows
        //top and bottom
        newGrid[l][0] = newGrid[l][gridHeight - 3];
        newGrid[l][gridHeight - 2] = newGrid[l][1];
        //left and right
        newGrid[0][l] = newGrid[gridHeight - 3][l];
        newGrid[gridHeight - 2][l] = newGrid[1][l];

    }

    //swap grids - this is the main iteration
    var temp = currentGrid;
    currentGrid = newGrid;
    newGrid = temp;
}
