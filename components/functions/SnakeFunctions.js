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

//check time passed in animation [miliseconds]:
const updateFrame = (current, last, speed) => {
  if (current - last >= 1000 / speed) return true;
  return false;
};

//move snake (update snake position):

//get new head position:
const getNewSnakeHeadPosition = (headPosition, direction, boardSquareSize) => {
  const max = Math.floor(boardSquareSize) - 1;
  if (direction === 'up') {
    return {
      x: headPosition.x,
      y: headPosition.y === 0 ? max : headPosition.y - 1,
    };
  }
  if (direction === 'down') {
    return {
      x: headPosition.x,
      y: headPosition.y === max ? 0 : headPosition.y + 1,
    };
  }
  if (direction === 'left') {
    return {
      x: headPosition.x === 0 ? max : headPosition.x - 1,
      y: headPosition.y,
    };
  }
  if (direction === 'right') {
    return {
      x: headPosition.x === max ? 0 : headPosition.x + 1,
      y: headPosition.y,
    };
  }
};

//main move
const move = (head, positionSetter) => {
  positionSetter((prev) => {
    const newPosition = [...prev].map((el, i) => {
      if (i === 0) {
        return head;
      }
      if (i !== 0) return prev[i - 1];
    });
    return newPosition;
  });
};

export { updateFrame, getNewSnakeHeadPosition, move, calcStartingPosition };
