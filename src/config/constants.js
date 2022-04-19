/* eslint-disable max-len */
export const ROW_SIZE = 9;
export const COLUMN_SIZE = 9;

export const EMPTY_GRID = () => new Array(COLUMN_SIZE).fill(null).map(() => new Array(ROW_SIZE).fill(0));
export const EMPTY_START_GRID = () => new Array(9).fill(null).map(() => new Array(9));

export const GET_RANDOM_BOARD = () => {
  const boardExample = [
    [
      [2, 0, 3, 0, 0, 8, 6, 0, 7],
      [1, 4, 0, 7, 2, 6, 0, 0, 9],
      [5, 0, 7, 1, 3, 9, 4, 2, 8],
      [0, 2, 5, 0, 8, 1, 9, 0, 4],
      [4, 1, 0, 9, 0, 3, 2, 0, 5],
      [0, 7, 9, 2, 0, 5, 0, 3, 6],
      [6, 0, 2, 0, 1, 0, 0, 9, 3],
      [7, 0, 0, 5, 0, 2, 0, 0, 1],
      [0, 8, 1, 3, 6, 7, 0, 4, 0],
    ],
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    [
      [0, 7, 9, 2, 0, 5, 0, 3, 6],
      [6, 0, 2, 0, 1, 0, 0, 9, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 3, 0, 0, 8, 6, 0, 7],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 6, 7, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [4, 1, 0, 9, 0, 3, 2, 0, 5],
    ],
    [
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ],
    [
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9],
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
    ],
  ];

  // function to get a random board from the board example array
  function getRandomBoard(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random board
    const board = arr[randomIndex];

    return board;
  }

  return getRandomBoard(boardExample);
};
