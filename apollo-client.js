
import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "https://countries.trevorblades.com/graphgql",
//     cache: new InMemoryCache(),
// });

const client = new ApolloClient({
    url: "https://devapiv2.walcart.com/graphql/",
    cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//     uri: 'https://api.spacex.land/graphql/',
//     cache: new InMemoryCache()
// });

export default client;