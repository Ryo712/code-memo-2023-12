function greet(name: string, age: number = 30): string {
    return `Hello, ${name}, your age is ${age}`;
}
console.log(greet("John")); // "Hello, John, your age is 30"
console.log(greet("John", 40)); // "Hello, John, your age is 40"

/*パラメータは、関数に渡される値のことです。関数は特定の処理を実行するために、
その処理に必要なデータを引数として受け取ります。関数が呼び出される際に渡される値がパラメータになります。 */

/*age パラメータは数値型 (number) で、デフォルト値が 30 に設定されています。
このようにデフォルト値を指定することで、age パラメータを省略した場合は 30 が使われます。 */