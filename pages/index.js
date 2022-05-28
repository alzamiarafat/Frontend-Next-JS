// import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home({ categories }) {



  // const initialState = results
  // const [characters, setCharacters] = useState(initialState.launches)

  console.log(categories);

  return (
    <div className='container mt-3'>
      <h5>What is Lorem Ipsum?</h5>
    </div>
  )
}


// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//         query {
//           countries {
//             code
//             name
//             emoji
//           }
//         }
//       `,
//   });

//   return {
//     props: {
//       test: data.countries.slice(0, 4),
//     },
//   };
// }



export async function getStaticProps() {

  const query = `query {
    getCategories(pagination: {limit: 10 skip: 0}) {
      message
      statusCode
    }
  }`;

  const response = await axios.post(`https://devapiv2.walcart.com/graphql/`, {
    query
  });

  // return { ...response.data.data };


  // const { data } = await client.query({
  //   query: gql`
  //     query {
  //       getCategories(pagination: {limit: 10 skip: 0}) {
  //         message
  //         statusCode
  //       }
  //     }
  //     `,
  // });

  return {
    props: {
      // launches: data.launchesPast,
      categories: response
    },
  };
}


// export const getStaticProps = async () => {
//   console.log("ran func data from spacex");
//   const client = new ApolloClient({
//     url: "https://devapiv2.walcart.com/graphql",
//     cache: new InMemoryCache(),
//   });

//   const res = await client.query({
//     query: gql`
//     query Query($pagination: PaginationInput) {
//       getCategories(pagination: $pagination) {
//         message
//         result {
//           count
//           categories {
//             uid
//             name
//             parent {
//               name
//               uid
//             }
//             parents {
//               uid
//               name
//             }
//             isActive
//             inActiveNote
//             createdAt
//             updatedAt
//           }
//         }
//       }
//     }
//     `,
//   });

//   // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   // const articles = await res.json()

//   return {
//     props: {
//       res
//     }
//   }
// }

// export async function getStaticProps() {
//   console.log("ran func data from spacex");

//   const client = new ApolloClient({
//     uri: "https://api.spacex.land/graphql/",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client
//     .query({
//       query: gql`{
//           launchesPast(limit: 1) {
//             mission_name
//             launch_date_local
//             launch_site {
//               site_name_long
//             }
//             links {
//               article_link
//               video_link
//             }
//             rocket {
//               rocket_name
//               first_stage {
//                 cores {
//                   flight
//                   core {
//                     reuse_count
//                     status
//                   }
//                 }
//               }
//               second_stage {
//                 payloads {
//                   payload_type
//                   payload_mass_kg
//                   payload_mass_lbs
//                 }
//               }
//             }
//             ships {
//               name
//               home_port
//               image
//             }
//           }
//         }
//       `,
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err, "error on your side"));

//   console.log("ran func data from spacex");

//   return {
//     props: {
//       launches: data
//     },
//   };
// }

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     url: "https://devapiv2.walcart.com/graphql",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//     query Query($pagination: PaginationInput) {
//       getCategories(pagination: $pagination) {
//         message
//         result {
//           count
//           categories {
//             uid
//             name
//             parent {
//               name
//               uid
//             }
//             parents {
//               uid
//               name
//             }
//             isActive
//             inActiveNote
//             createdAt
//             updatedAt
//           }
//         }
//       }
//     }
//     `,
//   });

//   console.log('fdsafsa')

//   return {
//     props: {
//       result: reslt,
//     }
//   }
// }