# grouping

Functions to group data by a key or multiple keys.

## Installation

> `npm install @codexcentral/grouping`

## Importing

### Javascript

```javascript
const { groupBy } = require("@codexcentral/grouping");
```

### Typescript

```typescript
import { groupBy } from "@codexcentral/grouping";
```

## Functions

- <details>
  <summary>groupBy</summary>
    
    Groups an array of objects by a key.

  | Parameter | Type   | Description               |
  | --------- | ------ | ------------------------- |
  | data      | Array  | Array of objects to group |
  | key       | String | Key to group by           |

  #### Example

  #### Javascript

  ```javascript
  const { groupBy } = require('@codexcentral/grouping');
  ...
  const people = [
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
  ```

  #### Typescript

  ```typescript
  import { groupBy } from '@codexcentral/grouping';
  ...
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
  ```

  </details>

- <details>
  <summary>partition</summary>

  Partitions an array of objects into two arrays based on a predicate function.

  | Parameter | Type     | Description               |
  | --------- | -------- | ------------------------- |
  | data      | Array    | Array of objects to group |
  | predicate | Function | Predicate function        |

  #### Examples

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const [even, odd] = partition(numbers, (n) => n % 2 === 0);
  console.log(even); // [2, 4]
  console.log(odd); // [1, 3, 5]
  ```

  ```javascript
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ];
  const [young, old] = partition(people, (person) => person.age < 30);
  console.log(young); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]
  console.log(old); // [{ name: 'Bob', age: 30 }]
  ```

  ```javascript
  const words = ["apple", "banana", "cherry", "date"];
  const [short, long] = partition(words, (word) => word.length <= 5);
  console.log(short); // ['apple', 'date']
  console.log(long); // ['banana', 'cherry' ]
  ```

  </details>

- <details>
  <summary>groupItems</summary>

  Groups a complex array into arrays of a specified size.

  | Parameter | Type   | Description               |
  | --------- | ------ | ------------------------- |
  | data      | Array  | Array of objects to group |
  | size      | Number | Size of each group        |

  #### Example

  ```typescript
  interface IProduct {
    name: string;
    price: number;
  }

  const products: IProduct[] = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
    { name: "Monitor", price: 300 },
    { name: "USB cable", price: 5 },
  ];

  const groupedProducts = groupItems(products, 2);
  console.log(groupedProducts);

  // Output:
  // [
  //   [
  //     { name: "Laptop", price: 1000 },
  //     { name: "Mouse", price: 20 },
  //   ],
  //   [
  //     { name: "Keyboard", price: 50 },
  //     { name: "Monitor", price: 300 },
  //   ],
  //   [{ name: "USB cable", price: 5 }],
  // ];
  ```

  </details>

- <details>
  <summary>chunk</summary>

  Groups a simple array into arrays of a specified size.

  | Parameter | Type   | Description               |
  | --------- | ------ | ------------------------- |
  | data      | Array  | Array of objects to group |
  | size      | Number | Size of each group        |

  #### Example

  ```typescript
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunkedNumbers = chunk(numbers, 3);
  console.log(chunkedNumbers);

  // Output:
  // [
  //   [ 1, 2, 3 ],
  //   [ 4, 5, 6 ],
  //   [ 7, 8, 9 ],
  //   [ 10 ]
  // ]
  ```

  #### Example

  ```typescript
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const groupedLetters = chunk(letters, 4);
  console.log(groupedLetters);

  // Output:
  // [
  //   ['a', 'b', 'c', 'd'],
  //   ['e', 'f', 'g', 'h']
  // ]
  ```

  </details>

# Credits

This code was written by [Roberto Silva Z.](https://www.linkedin.com/in/robertosilvazuniga/)

[<img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="BuyMeACoffee" width="200" />](https://www.buymeacoffee.com/robertosilvaz)
