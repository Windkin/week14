import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import DemoPageLinks from '../components/DemoPageLinks'
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import { getFood } from '../lib/data';

export async function getStaticProps() {
  const allData = await getFood();
  return {
    props: {
      allData
    }
  }
}

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Home = ({allData}) => {
  const AuthUser = useAuthUser()
    return (
      <div className="content">
        <main>
          <Layout home>
          <Header email={AuthUser.email} signOut={AuthUser.signOut} />
             
          
            <h1 className="text-center">Headless CMS-Powered App</h1>
              <div className="list-group">
                {allData.map(({ id, name }) => (
                  <Link key={id} href={`/${id}`}>
                    <a className="list-group-item list-group-item-action">{name}</a>
                  </Link>
                ))}
              </div>
          </Layout>
        </main>
      </div>
    )
}

export default withAuthUser()(Home)
