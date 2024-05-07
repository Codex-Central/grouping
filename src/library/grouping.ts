/*
This function groups an array of objects by a key. The key must be a string.
It returns an object with the keys as the values of the key and the values as the array of objects that have that key.

Example:
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

console.log(groupBy(people, 'age'));
// Output:
// {
//   '25': [
//     { name: 'Alice', age: 25 },
//     { name: 'Charlie', age: 25 }
//   ],
//   '30': [
//     { name: 'Bob', age: 30 }
//   ]
// }
*/

/**
 * Groups an array of objects by a key.
 * @param items The array of objects to group.
 * @param key The key to group by.
 * @returns An object with the keys as the values of the key and the values as the array of objects that have that key.
 * @example
 * interface Person {
 *   name: string;
 *   age: number;
 * }
 *
 * const people: Person[] = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 25 }
 * ];
 *
 * console.log(groupBy(people, 'age'));
 * // Output:
 * // {
 * //   '25': [
 * //     { name: 'Alice', age: 25 },
 * //     { name: 'Charlie', age: 25 }
 * //   ],
 * //   '30': [
 * //     { name: 'Bob', age: 30 }
 * //   ]
 * // }
 */
export function groupBy<T, K extends keyof T>(
  items: T[],
  key: K
): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const groupKey = item[key] as unknown as string;
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

/**
 * Partitions an array into two arrays based on a predicate.
 * @param items The array to partition.
 * @param predicate The predicate to partition by.
 * @returns An array with two elements. The first element is an array of items that pass the predicate, and the second element is an array of items that fail the predicate.
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const [even, odd] = partition(numbers, n => n % 2 === 0);
 * console.log(even); // [2, 4]
 * console.log(odd); // [1, 3, 5]
 * @example
 * const people = [
 *  { name: "Alice", age: 25 },
 * { name: "Bob", age: 30 },
 * { name: "Charlie", age: 25 }
 * ];
 * const [young, old] = partition(people, person => person.age < 30);
 * console.log(young); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]
 * console.log(old); // [{ name: 'Bob', age: 30 }]
 * @example
 * const words = ['apple', 'banana', 'cherry', 'date'];
 * const [short, long] = partition(words, word => word.length <= 5);
 * console.log(short); // ['apple', 'date']
 * console.log(long); // ['banana', 'cherry' ]
 */
export function partition<T>(
  items: T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  return items.reduce(
    ([pass, fail], item) => {
      return predicate(item)
        ? [[...pass, item], fail]
        : [pass, [...fail, item]];
    },
    [[], []] as [T[], T[]]
  );
}

/**
 * Groups a complex array into arrays of a specified size.
 * @param items The array to group.
 * @param groupSize The size of each group.
 * @returns An array of arrays where each array is of the specified size.
 * @example
 * interface IProduct {
 *   name: string;
 *   price: number;
 * }
 *
 * const products: IProduct[] = [
 *   { name: "Laptop", price: 1000 },
 *   { name: "Mouse", price: 20 },
 *   { name: "Keyboard", price: 50 },
 *   { name: "Monitor", price: 300 },
 *   { name: "USB cable", price: 5 }
 * ];
 *
 * const groupedProducts = groupItems(products, 2);
 * console.log(groupedProducts);
 *
 * // Output:
 * [
 *  [
 *    { name: 'Laptop', price: 1000 },
 *    { name: 'Mouse', price: 20 }
 *  ],
 *  [
 *    { name: 'Keyboard', price: 50 },
 *    { name: 'Monitor', price: 300 }
 *  ],
 *  [ { name: 'USB cable', price: 5 } ]
 *]
 */
export const groupItems = <T>(
  items: T[] | null | undefined,
  groupSize: number
): T[][] => {
  if (!items) {
    return [];
  }

  if (groupSize <= 0) {
    throw new Error("groupSize must be greater than zero.");
  }

  if (groupSize >= items.length) {
    return [items];
  }

  return items.reduce<T[][]>((acc, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);
};

/**
 * Groups a simple array into arrays of a specified size.
 * @param items The array to group.
 * @param size The size of each group.
 * @returns An array of arrays where each array is of the specified size.
 * @example
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
 * const groupedNumbers = chunk(numbers, 3);
 * console.log(groupedNumbers);
 * // Output:
 * // [
 * //   [1, 2, 3],
 * //   [4, 5, 6],
 * //   [7, 8]
 * // ]
 * @example
 * const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
 * const groupedLetters = chunk(letters, 4);
 * console.log(groupedLetters);
 * // Output:
 * // [
 * //   ['a', 'b', 'c', 'd'],
 * //   ['e', 'f', 'g', 'h']
 * // ]
 */
export function chunk<T>(items: T[], size: number): T[][] {
  return items.reduce((acc, item, idx) => {
    const chunkIndex = Math.floor(idx / size);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, [] as T[][]);
}
