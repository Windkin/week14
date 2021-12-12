import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title >Week 14 Next JS App W. Richman</title>
      </Head>

      <header>
        <nav className="text-center">
          <h1>Week 14 Assignment</h1>
          
        </nav>
      </header>
      
      <div>{children}</div>
      {!home && (
        <div className="text-center">
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link><br/>
        </div>
        )
      }
      <footer className="text-center p-4">
        <h6>Week 14 cs55.13 W. Richman</h6>
      </footer>
    </div>
  );
}

