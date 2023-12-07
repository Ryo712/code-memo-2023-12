//まず、関数 add のオーバーロード宣言が行われています。これにより、2つの異なる呼び出しシグネチャが定義されています。
function add(a: number, b: number): number;
function add(numbers: number[]): number;

// 実装部分
function add(number: number | number[], b?: number) {
    if (typeof number === "number") {
        return number + b;
    }
    return number.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}
//typeof number === "number" で、引数 number が単一の数値であるかどうかを確認しています。
//単一の数値の場合、number + b を返しています。
console.log(add(2, 3)); // 5
console.log(add([1, 2, 3, 4])); // 10
//関数 add はオーバーロードされているため、引数の型や数に応じて適切な実装が呼び出されます。

/**add(2, 3) では、最初のオーバーロードが適用され、2 + 3 が計算されて 5 が返されます。
 * add([1, 2, 3, 4]) では、2番目のオーバーロードが適用され、配列 [1, 2, 3, 4] の合計が計算されて 10 が返されます。
 */
/*オーバーロードを使用することで、異なる型や引数のパターンに対して柔軟に対応できる関数を作成できます */