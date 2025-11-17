function formatValue(
  value: number | string | boolean
): string | number | boolean {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else return !value;
}




function getLength(value: string | any[]): number {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
}




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


