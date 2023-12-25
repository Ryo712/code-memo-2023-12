// Next リンクの作成
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}

export default HomePage;

/*<Link> コンポーネントを使用して、href プロパティに遷移先のパス (/about) を指定し、その中にリンクとなる要素 (<a>) を配置しています。
このリンクをクリックすると、クライアントサイドでのページ遷移が発生します。 */