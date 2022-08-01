import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Gotu&display=swap" rel="stylesheet" />
          <meta property="og:title" content="Soul Studio" />
          <meta name="theme-color" content="#E67221" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Soul Studio" />
          <meta name="twitter:image" content="/images/logo.png" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            name="description"
            content="Soul Studio - Aulas de Pilates | Manoel Ribas, 193, Centro, Telêmaco Borba-PR"
          />
          <meta name="keywords" content="Telêmaco Borba, Pilates, Microfisioterapia, Fisioterapia, Studio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
