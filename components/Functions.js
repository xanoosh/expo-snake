//calculate snake starting position based on board size:
const calcStartingPosition = (boardSquareSize) => {
  return [
    {
      x: Math.floor(boardSquareSize / 2),
      y: Math.floor(boardSquareSize / 2) - 1,
    },
    {
      x: Math.floor(boardSquareSize / 2),
      y: Math.floor(boardSquareSize / 2),
    },
    {
      x: Math.floor(boardSquareSize / 2),
      y: Math.floor(boardSquareSize / 2) + 1,
    },
  ];
};

//generate random food coordinates 
const randomFoodPosition = (board) => {
  return { x:Math.floor(Math.random() * board),y:Math.floor(Math.random() * board)}
};

//check if food overlaps and set foor coordinates
const getFoodPosition = (snakePosition, board, foodSetter) => {
    const food = randomFoodPosition(board)
    for (const segment of snakePosition) {
      if (segment.x === food.x && segment.y === food.y) {
        foodSetter(food);
        return;
      }
    }
    getFoodPosition(snakePosition, board, foodSetter)
  },

//check time passed in animation [miliseconds]:
const updateFrame = (current, last, speed) => {
  if (current - last >= 1000 / speed) return true;
  return false;
};

//move snake (update snake position):
const move = (direction, boardSquareSize, positionSetter) => {
  positionSetter((prev) => {
    const max = Math.floor(boardSquareSize) - 1;
    const newPosition = [...prev].map((el, i) => {
      if (i === 0) {
        if (direction === 'up') {
          return { x: el.x, y: el.y === 0 ? max : el.y - 1 };
        }
        if (direction === 'down') {
          return { x: el.x, y: el.y === max ? 0 : el.y + 1 };
        }
        if (direction === 'left') {
          return { x: el.x === 0 ? max : el.x - 1, y: el.y };
        }
        if (direction === 'right') {
          return { x: el.x === max ? 0 : el.x + 1, y: el.y };
        }
      }
      if (i !== 0) return prev[i - 1];
    });
    return newPosition;
  });
};

export { updateFrame, move, calcStartingPosition, randomFoodPosition, getFoodPosition };
