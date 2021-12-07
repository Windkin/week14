import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Week 4 Next JS App W. Richman</title>
      </Head>
      <header>
        <nav className="text-center">
          <h1>Week 13 Assignment</h1>
          
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-center">
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link><br/>
        </div>
        )
      }
      <footer className="text-center p-4">
        <h6>Week 13 cs55.13 W. Richman</h6>
      </footer>
    </div>
  );
}