/* eslint-disable */
/**
 * =========================
 * BASIC TYPES
 * =========================
 */

let username: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

/**
 * Type inference (no annotation needed)
 */
let inferred = 42; // inferred as number

/**
 * =========================
 * ARRAYS
 * =========================
 */

let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b', 'c'];

/**
 * =========================
 * UNION TYPES
 * =========================
 */

let id: string | number;

id = 'abc';
id = 123;

/**
 * =========================
 * LITERAL TYPES
 * =========================
 */

let direction: 'left' | 'right' | 'up' | 'down';
direction = 'left';

/**
 * =========================
 * FUNCTIONS
 * =========================
 */

// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}

// Default parameters
function createUser(name: string = 'Guest'): string {
  return name;
}

// Void return
function logMessage(msg: string): void {
  console.log(msg);
}

/**
 * =========================
 * OBJECT TYPES
 * =========================
 */

type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
};

const user: User = {
  name: 'Bob',
  age: 25,
};

/**
 * =========================
 * INTERFACES
 * =========================
 */

interface Product {
  id: number;
  title: string;
}

const product: Product = {
  id: 1,
  title: 'Book',
};

/**
 * Extending interfaces
 */
interface Admin extends User {
  role: string;
}

/**
 * =========================
 * TYPE ALIASES vs INTERFACES
 * =========================
 */

type ID = string | number;

interface Person {
  name: string;
}

/**
 * =========================
 * GENERICS
 * =========================
 */

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity('hello'); // inferred

/**
 * Generic with constraints
 */
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

/**
 * =========================
 * TYPE ASSERTIONS
 * =========================
 */

const input = document.querySelector('input') as HTMLInputElement;

input.value = 'Hello';

/**
 * Alternative syntax
 */
const div = <HTMLDivElement>document.querySelector('div');

/**
 * =========================
 * UNKNOWN vs ANY
 * =========================
 */

let value: unknown = 'text';

// safer
if (typeof value === 'string') {
  console.log(value.toUpperCase());
}

// avoid if possible
let anything: any = 123;

/**
 * =========================
 * ENUMS
 * =========================
 */

enum Status {
  Pending,
  Success,
  Error,
}

let currentStatus: Status = Status.Success;

/**
 * =========================
 * TUPLES
 * =========================
 */

let tuple: [string, number];
tuple = ['age', 30];

/**
 * =========================
 * READONLY
 * =========================
 */

type ReadonlyUser = {
  readonly name: string;
};

const readonlyUser: ReadonlyUser = {
  name: 'Alice',
};

// readonlyUser.name = 'Bob'; ❌ Error

/**
 * =========================
 * PARTIAL / UTILITY TYPES
 * =========================
 */

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type PickUser = Pick<User, 'name'>;
type OmitUser = Omit<User, 'age'>;

/**
 * =========================
 * CLASSES
 * =========================
 */

class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public speak(): void {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log('Woof!');
  }
}

/**
 * =========================
 * TYPE NARROWING
 * =========================
 */

function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

/**
 * =========================
 * MODULE EXPORTS
 * =========================
 */

export const PI: number = 3.14;

export function square(x: number): number {
  return x * x;
}
/* eslint-enable */
