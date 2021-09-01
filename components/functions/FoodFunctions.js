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

//check if snake head is gonna collide with food
const isFoodEaten = (food, snake) => {
  return food.x === snake.x && food.y === snake.y;
};

//add new snake head on food collision
const digest = (nextHead, snakePositionSetter) => {
  snakePositionSetter((prev) => [nextHead, ...prev]);
};

export { randomFoodPosition, getFoodPosition, isFoodEaten, digest };
