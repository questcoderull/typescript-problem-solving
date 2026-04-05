const formatValue = (
  p: string | number | boolean,
): string | number | boolean => {
  if (typeof p === "string") {
    return p.toUpperCase();
  } else if (typeof p === "number") {
    return p * 10;
  } else {
    return !p;
  }
};

const getLength = (v: string | string[] | number[]): number => {
  if (typeof v === "string") {
    return v.length;
  } else {
    return v.length;
  }
};

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

interface BookItems {
  title: string;
  rating: number;
}

const filterByRating = (value: BookItems[]): BookItems[] => {
  return value.filter((v) => v.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (books: Book): void => {
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? "Yes" : "No"}`,
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

const getUniqueValues = (
  value1: string[] | number[],
  value2: string[] | number[],
): (string | number)[] => {
  const oneArray = [...value1, ...value2];

  const newArray: (number | string)[] = [];

  for (const item1 of oneArray) {
    let sameValue = false;
    for (const item2 of newArray) {
      if (item1 === item2) {
        sameValue = true;
      }
    }

    if (!sameValue) {
      newArray.push(item1);
    }
  }

  return newArray;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Products[]): number => {
  return products.reduce((total, product) => {
    const price = product.price * product.quantity;

    if (product.discount) {
      const discountPrice = (price * product.discount) / 100;
      return total + (price - discountPrice);
    } else {
      return total + price;
    }
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
