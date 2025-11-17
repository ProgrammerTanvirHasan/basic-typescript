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

type item = {
  title: string;
  rating: number;
};

function filterByRating(items: item[]): item[] {
  for (const item of items) {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error("Rating must be between 0 to 5");
    }
  }

  return items.filter((item) => item.rating >= 4);
}

type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: user[]): user[] {
  return users.filter((user) => user.isActive === true);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const available = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title : ${book.title}, Author : ${book.author}, Published : ${book.publishedYear},  Available : ${available}`
  );
}
