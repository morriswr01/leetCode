var floodFill = function(image, sr, sc, newColor) {
    const startVal = image[sr][sc];
    let positionsToPropagate = [[sr,sc]];
    let newImg = image;
    

    let calcNewImg = (sr, sc) => {
        return newImg.map((row, i) => {
            return row.map( (value, j) => {
                if(value === startVal && i === sr && (j === sc-1 || j === sc+1 || j === sc)) {
                    if(!positionsToPropagate.includes([i,j])) positionsToPropagate.push([i,j]);
                    return newColor;
                }
                if(value === startVal && j === sc && (i === sr-1 || i=== sr+1 || i === sr)) {
                    if(!positionsToPropagate.includes([i,j])) positionsToPropagate.push([i,j]);
                    return newColor;
                }
                else return value;
            })
        })
    }
    
    let counter = 0;

    while(positionsToPropagate.length > 0 & counter < Math.pow(newImg.length, 3)){
        newImg = calcNewImg(positionsToPropagate[0][0], positionsToPropagate[0][1]);
        positionsToPropagate.shift();
        counter++;
    }
    
    console.log(newImg);
};

floodFill([[0, 0, 0], [0, 1, 0]], 1, 1, 1);
// floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2);