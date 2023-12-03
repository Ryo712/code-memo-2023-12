function toUpperCase(x: string | number) : string | number {
    if(typeof x === 'string') {
      return x.toUpperCase();
    }
    return x;
  }
/*もし x が文字列の場合は、toUpperCase メソッドを用いて文字列を大文字に変換し、
それ以外の場合はそのまま返します。返り値の型は string | number です。 */  
  interface Engineer {
    name: string;
    role: string;
    createCode(lang: string): void;
  }
  interface Sales {
    name: string;
    customerNum: number;
  }
/*name プロパティは文字列型で、role プロパティは文字列型です。さらに、createCode メソッドがあり、
引数として文字列 (lang) を受け取り、戻り値がない (void) 形式のメソッドです。 */  
  type Job = Engineer | Sales;
  function checkWork(job: Job) {
    if('role' in job) {
      job.createCode('TypeScript');
    }
  }
/*Job 型は、Engineer または Sales のいずれかであるという意味で、
これを利用することで、Engineer 型または Sales 型のオブジェクトを扱うことができます。 */  
/*Job 型の引数 job を受け取ります。そして、job が Engineer インターフェースに含まれるプロパティ 
roleを持っているかどうかをチェックしています ('role' in job)。もし role を持っていれば、createCode メソッドを呼び出して、引数として 'TypeScript' を渡します。 */