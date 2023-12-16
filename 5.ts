/*Typescriptメモ 
.ts拡張子と.tsx拡張子の違い 

.ts拡張子 
純粋なTypeScriptファイル
/*JSX要素の追加をサポートしない

.tsx拡張子
JSXを含むファイル
型アサーションの記法として value as type と <type>value の2通りあるが、後者は .tsx には書けない
（ <> はJSXタグのマーカーであるため） 

.ts と .tsx は明示的に分けるべき
なぜか？

/*拡張子で明示的にしておくことで、「このファイルにJSXを書くべきではない」ことを表すことができるため
（UIコンポーネントのファイルか、ロジックを書くファイルか） */