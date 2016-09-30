function generateSpiralMatrix(input) {
    [rows, cols] = input.map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(Number));
    }
    // for (let row = 0; row < rows; row++) {
    //     matrix[row] = [];
    //     for (let col = 0; col < cols; col++) {
    //         matrix[row][col] = 0;
    //     }
    // }

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    let index = 1;
    let direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}

generateSpiralMatrix(['5', '5']);