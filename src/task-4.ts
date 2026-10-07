function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);

  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo('Anna', 25);
printUserInfo('John', 30, 'john@example.com');
