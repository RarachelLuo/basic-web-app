function isSquare(num: number): boolean{
  if (number < 0) {
    return false; // Negative numbers cannot be squares
  
  }

  const squareRoot = Math.sqrt(number);
  return squareRoot === Math.floor(squareRoot);
}

function isCube(number: number): boolean {
  const cubeRoot = Math.cbrt(number);
  return cubeRoot === Math.floor(cubeRoot);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "rgluo"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "rat"
    );
  }

  const numbers = query.match(/\d+(\.\d+)?/g);

  if (query.toLowerCase().includes("plus")) {
    
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }

  }

  if (query.toLowerCase().includes("multiplied")) {
    
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x*y).toString();
    }

  }

  if (query.toLowerCase().includes("minus")) {
    
    const addMatch = query.match(/What is (\d+) minus (\d+)/);
    
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x-y).toString();
    }

  }

  if (query.toLowerCase().includes("power")) {
    
    const addMatch = query.match(/What is (\d+) to the power of (\d+)/);
    
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (Math.pow(x,y)).toString();
    }

  }
  if (query.toLowerCase().includes("largest")) {
    
    const largeMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    if (largeMatch) {
      const x: number = parseInt(largeMatch[1]);
      const y: number = parseInt(largeMatch[2]);
      const z: number = parseInt(largeMatch[3]);
      return (Math.max(x,y,z)).toString();
    }

  }

  if (query.toLowerCase().includes("square and a cube")) {
    
    const largeMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
    if (largeMatch) {
      const a: number = parseInt(largeMatch[1]);
      const b: number = parseInt(largeMatch[2]);
      const c: number = parseInt(largeMatch[3]);
      const d: number = parseInt(largeMatch[1]);
      const e: number = parseInt(largeMatch[2]);
      const f: number = parseInt(largeMatch[3]);
      const g: number = parseInt(largeMatch[3]);

      if isSquare(a) and isCube(a){
      }
    }

  }

  return "";
}
