export interface Vector {
  x: number,
  y: number
}

export function addVector(x: number, y: number, vector: Vector): Vector {
  return {
    x: x + vector.x,
    y: y + vector.y,
  };
}