// import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import CategoryList from "../components/CategoryList";

export default function Home({ categories }) {

  console.log(categories);

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <div className={styles.grid}>
          <form action="/api/getCategory" class="form-control" method="post">
            <div class="form-group">
              <label for="name">Catagory Name</label>
              <input type="text" class="form-control" id="name" name="name" />
            </div>
            <button type="submit" className="my-3 btn btn-primary">Add</button>
          </form>

          <div className="row mt-3">
            {categories && categories.map((category, index) =>
              <div className="col-3 border m-3" key={index}>
                <a href="#">
                  <h2>{category.uid}</h2>
                  <p>{category.name}</p>
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>

  )
}

export async function getStaticProps() {
  let body = {
    query: `
    query {
      getCategories (pagination: {limit: 100 skip: 0}) {
        message
        statusCode
        result {
          count
          categories {
            uid
            name
            parent {
              uid
              name
            }
            parents {
              uid
              name
            }
            isActive
            inActiveNote
            createdAt
            updatedAt
          }
        }
      }
    }
    `
  }

  const { data } = await axios.post(`https://devapiv2.walcart.com/graphql`, body)

  return {
    props: {
      categories: data.data.getCategories.result.categories
    },
  };
}





// export async function getStaticProps() {

//   const query = `query {
//     getCategories(pagination: {limit: 10 skip: 0}) {
//       message
//       statusCode
//     }
//   }`;

//   // const response = await axios.post(`https://devapiv2.walcart.com/graphql/`, {
//   //   query
//   // });

//   // return { ...response.data.data };


//   // const { data } = await client.query({
//   //   query: gql`
//   //     query {
//   //       getCategories(pagination: {limit: 10 skip: 0}) {
//   //         message
//   //         statusCode
//   //       }
//   //     }
//   //     `,
//   // });

//   return {
//     props: {
//       // launches: data.launchesPast,
//       categories: response
//     },
//   };
// }


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