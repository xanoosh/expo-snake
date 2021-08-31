//generate random food coordinates
const randomFoodPosition = (board) => {
  return {
    x: Math.floor(Math.random() * board),
    y: Math.floor(Math.random() * board),
  };
};

//check if food overlaps and set foor coordinates
const getFoodPosition = (snakePosition, board, foodSetter) => {
  const food = randomFoodPosition(board);
  for (const segment of snakePosition) {
    if (segment.x === food.x && segment.y === food.y) {
      getFoodPosition(snakePosition, board, foodSetter);
      return;
    }
  }
  foodSetter(food);
};

const isFoodEaten = (food, snake) => {
  return food.x === snake.x && food.y === snake.y;
};

const addEatenFood = (position, eatenSetter) => {
  eatenSetter((prev) => prev.add(position));
};

const snakeGonnaDigest = (eatenSet, snakePosition, digestSetter) => {
  //   result = false;
  for (const eaten of eatenSet) {
    if (
      eaten.x === snakePosition[snakePosition.length - 1].x &&
      eaten.y === snakePosition[snakePosition.length - 1].y
    ) {
      digestSetter(snakePosition[snakePosition.length - 1]);
    }
  }
};

const snakeDigestedFood = (digest, digestSetter, snakePositionSetter) => {
  snakePositionSetter((prev) => [...prev, digest]);
  digestSetter(false);
};

export {
  randomFoodPosition,
  getFoodPosition,
  isFoodEaten,
  addEatenFood,
  snakeGonnaDigest,
  snakeDigestedFood,
};
