class Car {
    private engineStarted: boolean = false;
  
    // メソッドの定義
    startEngine() {
      this.engineStarted = true;
      console.log('Engine started!');
    }
  
    stopEngine() {
      this.engineStarted = false;
      console.log('Engine stopped.');
    }
  
    // 現在のエンジンの状態を取得するメソッド
    isEngineStarted(): boolean {
      return this.engineStarted;
    }
  }
  
  // オブジェクトの作成
  const myCar = new Car();
  
  // メソッドの呼び出し
  myCar.startEngine();
  console.log(myCar.isEngineStarted()); // true
  myCar.stopEngine();
  console.log(myCar.isEngineStarted()); // false

/*Car クラスが startEngine、stopEngine、isEngineStarted といったメソッドを持っており、
これらのメソッドを使って自動車のエンジンの起動・停止の状態を制御しています。 */  