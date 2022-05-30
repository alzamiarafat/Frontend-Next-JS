import React from 'react'
import styles from '../styles/Home.module.css'
// import { useDispatch } from "react-redux";

export default function CategoryList(categories) {

    // const dispatch = useDispatch();

    console.log(categories)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {/* {categories && categories.map((category, index) =>
                        <div className={styles.card} key={index}>
                            <a href="#">
                                <h2>{category.uid}</h2>
                                <p>{category.name}</p>
                            </a>
                        </div>
                    )} */}
                </div>
            </main>
        </div>

    )
}


export async function getStaticProps() {

    const { data } = await axios.post(`https://devapiv2.walcart.com/graphql`, body)

    return {
        props: {
            categories: data.data.getCategories.result.categories
        },
    };
}
