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

digestFood = (eatenSet, snakePosition, snakePositionSetter) => {
  for (let i = 0; i < snakePosition.length; i++) {
    if (!eatenSet.has(snakePosition[i])) {
      snakePositionSetter((prev) => [...snakePosition]);
    }
  }
};

export { randomFoodPosition, getFoodPosition, isFoodEaten, addEatenFood };
