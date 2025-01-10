import { HttpLink } from '@apollo/client'
import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
  } from "@apollo/experimental-nextjs-app-support";

const httpLink = new HttpLink({
    // @todo Read from env.
    uri: 'http://funstation.go.ro:1337/graphql', // Your Strapi GraphQL endpoint
    // credentials: 'same-origin'  // Or 'include' if your API is on a different domain
})

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: httpLink
    })
});
