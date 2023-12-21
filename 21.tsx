// 例: Reactコンポーネントを含むTypeScriptファイル (.tsx)
import React from 'react';

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default MyComponent;

/*.tsx ファイルは、Reactコンポーネントを含む場合に使用されます。
ReactコンポーネントはJSX（JavaScript XML）構文を使用するため、JSXをサポートするためには
 .tsx ファイルを使用する必要があります。
 */
/*.tsx ファイルはReactのコンポーネントを記述するために主に使用されますが、
通常のJavaScriptやTypeScriptのコードも同様に記述できます。
Reactを使用している場合は、.tsx ファイルを使用することが一般的。 */