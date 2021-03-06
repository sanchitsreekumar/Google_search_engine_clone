import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';


import Response from '../Response';
import { useRouter } from 'next/router';
import SearchResults from '../components/SearchResults';

function Search({results}) {
    const router = useRouter()

    // console.log(results);
  return <div>
      <Head>
          <title>{router.query.term}- Google Search</title>
      </Head>

      {/* header */}
        <Header/>

      {/* Search Result */}
      <SearchResults results={results}/>



  </div>;
}

export default Search;


export async function getServerSideProps(context){
    const useDummyData = false; // to prevent exhausting the api calls
    const startIndex = context.query.start || '0'

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`) 
    .then(res => res.json());

    //after server has rendered pass the result to the client
    return{
        props:{
            results: data
        }
    }
}