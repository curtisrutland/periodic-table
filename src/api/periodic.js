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

export function match(element, searchText = "") {
  let s = searchText.trim().toLowerCase();
  if(s === "") 
    return false;
  return element.name.toLowerCase().indexOf(s) >= 0
    || element.symbol.toLowerCase().indexOf(s) >= 0
    || element.number.toString() === s;
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