// 動物（Animal）クラスの定義
class Animal {
    // コンストラクタ。name プロパティを引数として取り、public 修飾子を使ってクラスのメンバーになるようにしている
    constructor(public name: string) {}
  
    // makeSound メソッド。戻り値がない（void）メソッドで、ログに "Some generic sound" を表示する
    makeSound(): void {
      console.log("Some generic sound");
    }
  }
  
  // 動物（Animal）クラスを拡張した犬（Dog）クラスの定義
  class Dog extends Animal {
    // makeSound メソッドをオーバーライド。犬用の音声 "Woof! Woof!" を表示する
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  // Dog クラスのインスタンスを生成。コンストラクタに "Buddy" という名前を指定している
  let myDog: Dog = new Dog("Buddy");
  
  // myDog インスタンスの makeSound メソッドを呼び出す
  myDog.makeSound();
  