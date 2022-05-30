import nc from "next-connect";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategoryResults } from '../../app/categoryReducer'
// import wrapper from '../../app/store'

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


// const dispatch = useDispatch();


// export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
//     console.log('2. Page.getServerSideProps uses the store to dispatch things');
//     store.dispatch({type: 'TICK', payload: 'was set in other page'});
//   });

// export const handler = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
//     // const dispatch = useAppDispatch();
//     const { data } = await axios.post(`https://devapiv2.walcart.com/graphql`, body)

//     res.send(data.data.getCategories.result.categories)
// });

// export default handler









// const dispatch = useAppDispatch();

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .get(async (req, res) => {
        const { data } = await axios.post(`https://devapiv2.walcart.com/graphql`, body)
        // .then(({ data }) => {
        //     dispatch(setCategoryResults(data.getCategories.result.categories));
        // })
        res.send(data);
    })
    .post(async (req, res) => {
        let requestData = {
            query: `
                mutation {
                    createCategory(category: {name: "${req.body.name}" parentCategoryUid: "C-YPSLUG"}) {
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
        const { data } = await axios.post(`https://devapiv2.walcart.com/graphql`, requestData)
        if (data.data.createCategory.statusCode == 200) {
            res.redirect('/')
        }

        // res.send(data.data.createCategory)

    })
    .put(async (req, res) => {
        res.end("async/await is also supported!");
    })
    .patch(async (req, res) => {
        throw new Error("Throws me around! Error can be caught and handled.");
    });

export default handler;