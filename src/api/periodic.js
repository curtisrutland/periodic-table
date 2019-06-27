import sourceData from "data/periodicTable.json";

export const { elements } = sourceData;
export const X_MAX = 18;
export const Y_MAX = 10;
export const elementMap = new Map();
export const elementIndexes = [];

export function getElement(x, y) {
  if (x > X_MAX || y > Y_MAX) return;
  return elementMap.get(x).get(y);
}

function initializeElementMap() {
  for (let i = 1; i <= X_MAX; i++) {
    elementMap.set(i, new Map());
  }
  elements.forEach(element => {
    elementMap.get(element.xpos).set(element.ypos, element);
  });
}

function initializeElementIndexes() {
  let key = 0;
  for (let y = 1; y <= Y_MAX; y++)
    for (let x = 1; x <= X_MAX; x++)
      elementIndexes.push({ x, y, key: key++ });
}

initializeElementMap();
initializeElementIndexes();