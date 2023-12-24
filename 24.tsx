const HomePage = () => {
    const [sidenav, setSidenav] = useState(true);
//useEffect フックは、コンポーネントがマウントされたとき（初回レンダリング時）に一度だけ実行されます  
  
    useEffect(() => {
      // Alpine.jsスクリプトを動的に追加
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/alpinejs@2.x.x/dist/alpine.min.js';
      script.defer = true;
//document.createElement('script') によって script 要素が作成され、その src に Alpine.js の CDN パスが指定されます。
      document.body.appendChild(script);
      // コンポーネントがアンマウントされたときにスクリプトを削除
      return () => {
        document.body.removeChild(script);
      };
//document.body.removeChild(script); }; は、コンポーネントがアンマウントされたときに実行され、script 要素が body から削除されます。これにより、メモリリークを防ぎます。      
    }, []); // 空の依存リストは初回のみ実行することを保証
//Alpine.js スクリプトは初回のみ読み込まれ、コンポーネントがアンマウントされるときにスクリプトがクリーンアップされます。これにより、Alpine.js を必要な時にのみ読み込み、不要になったら解放できるようになります。    