/* eslint-disable no-unused-vars */
/**
 *
 * ██████╗ ██╗   ██╗██████╗ ██╗███╗   ██╗██████╗ ███████╗██████╗
 * ██╔══██╗██║   ██║██╔══██╗██║████╗  ██║██╔══██╗██╔════╝██╔══██╗
 * ██████╔╝██║   ██║██████╔╝██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝
 * ██╔══██╗██║   ██║██╔══██╗██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
 * ██║  ██║╚██████╔╝██████╔╝██║██║ ╚████║██████╔╝███████╗██║  ██║
 * ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
 *
 *  written by Rubinder Singh 4-Nov-2018
 *  copyright ©
 *
 * @param gameArr
 * returns the solved sudoku puzzle
 * note: in case there are multiple solutions this function will only return the first solution
 */

function nextEmptySpot(gameArr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (gameArr[i][j] === 0) return [i, j];
    }
  }

  return [-1, -1];
}

function possibilities(r, c, gameArr) {
  const possArr = [];
  const row = [];
  const col = [];
  const quad = [];
  let k = 0;
  let l = 0;

  if (r <= 2) k = 0;
  else if (r <= 5) k = 3;
  else k = 6;
  if (c <= 2) l = 0;
  else if (c <= 5) l = 3;
  else l = 6;

  for (let i = 0; i < 9; i++) {
    row.push(gameArr[i][c]);
  }

  for (let j = 0; j < 9; j++) {
    col.push(gameArr[r][j]);
  }

  for (let i = k; i < k + 3; i++) {
    for (let j = l; j < l + 3; j++) {
      quad.push(gameArr[i][j]);
    }
  }

  for (let n = 1; n < 10; n++) {
    if (
      row.indexOf(n) === -1
      && col.indexOf(n) === -1
      && quad.indexOf(n) === -1
    ) {
      possArr.push(n);
    }
  }

  return possArr;
}

function checkQuadrant(r, c, gameArr) {
  const quadrantArr = [];
  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      if (quadrantArr.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
        quadrantArr.push(gameArr[i][j]);
      } else {
        return false;
      }
    }
  }

  return true;
}

function isValidSudoku(gameArr) {
  if (!checkQuadrant(0, 0, gameArr)) return false;
  if (!checkQuadrant(0, 3, gameArr)) return false;
  if (!checkQuadrant(0, 6, gameArr)) return false;

  if (!checkQuadrant(3, 0, gameArr)) return false;
  if (!checkQuadrant(3, 3, gameArr)) return false;
  if (!checkQuadrant(3, 6, gameArr)) return false;

  if (!checkQuadrant(6, 0, gameArr)) return false;
  if (!checkQuadrant(6, 3, gameArr)) return false;
  if (!checkQuadrant(6, 6, gameArr)) return false;

  for (let i = 0; i < gameArr.length; i++) {
    const rowNumbers = [];
    for (let j = 0; j < gameArr.length; j++) {
      if (rowNumbers.indexOf(gameArr[i][j]) === -1 || gameArr[i][j] === 0) {
        rowNumbers.push(gameArr[i][j]);
      } else {
        return false;
      }
    }
  }

  for (let i = 0; i < gameArr.length; i++) {
    const colNumbers = [];
    for (let j = 0; j < gameArr.length; j++) {
      if (colNumbers.indexOf(gameArr[j][i]) === -1 || gameArr[j][i] === 0) {
        colNumbers.push(gameArr[j][i]);
      } else {
        return false;
      }
    }
  }

  return true;
}

export default function solveSudoku(gameArr) {
  const emptySpot = nextEmptySpot(gameArr);
  const r = emptySpot[0];
  const c = emptySpot[1];

  // if the game is unsolvable don't even try to solve it
  if (!isValidSudoku(gameArr)) return gameArr;

  // if no vacant spot is left, board is solved
  if (r === -1) {
    return gameArr;
  }

  const possArr = possibilities(r, c, gameArr);

  for (let k = 0; k < possArr.length && nextEmptySpot(gameArr)[0] !== -1; k++) {
    gameArr[r][c] = possArr[k];
    solveSudoku(gameArr);
  }

  // if no possible value leads to a solution reset this value
  if (nextEmptySpot(gameArr)[0] !== -1) gameArr[r][c] = 0;

  return gameArr;
}
