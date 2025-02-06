import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";


export const getUntraversedNeighbors = (
    grid: GridType,
    tile: TileType
) => {
    const { row, col } = tile
    const neighbors = []

    if (row > 0) {
        neighbors.push(grid[row - 1][col]);
    } // This is to push the tile above the current tile to the neighbors array

    if (row < MAX_ROWS - 1) {
        neighbors.push(grid[row + 1][col]);
    } // This is to push the tile below the current tile to the neighbors array

    if (col > 0) {
        neighbors.push(grid[row][col - 1]);
    } // This is to push the tile to the left of the current tile to the neighbors array

    if (col < MAX_COLS - 1) {
        neighbors.push(grid[row][col + 1]);
    } // This is to push the tile to the right of the current tile to the neighbors array

    return neighbors.filter((neighbor) => !neighbor.isTraversed);
}