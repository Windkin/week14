import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }){
  return (
    <Layout>
      <div className="container">
      <br/>
        <h3 className="text-center"><u>{itemData.post_title}</u></h3>
          <div className="row">
            
            <div className="col" dangerouslySetInnerHTML={{__html: itemData.post_content}}/>
          </div>
        <p>posted on: {itemData.post_date}</p>
      </div>
    </Layout>
  );
}
