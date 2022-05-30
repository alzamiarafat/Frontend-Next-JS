import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import axios from "axios";

export default function Category({ categories }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        let requestData = {
            query: `
          mutation {
              createCategory(category: {name: "${name}" parentCategoryUid: "C-YPSLUG"}) {
                  message
                  statusCode
                  result {
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
      `
        }
        e.preventDefault();
        axios.post(`https://devapiv2.walcart.com/graphql`, requestData)
            .then((res) => {
                setName('');
                alert(res.data.data.createCategory.message)
            })
            .catch((err) => {
                alert(err)
            });
    };
    // console.log(categories);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <form onSubmit={(e) => handleSubmit(e)} className="form-control">
                        <div className="form-group">
                            <label htmlFor="name">Catagory Name</label>
                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" name="name" />
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Add</button>
                    </form>
                    <div className="row mt-3">
                        {categories && categories.map((category, index) =>
                            <div className="col-3 border m-3" key={index}>
                                <a href={`/category/${category.uid}`}>
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