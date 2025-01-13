import { HttpLink } from '@apollo/client'
import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_STRAPI_URL,
})

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: httpLink
    })
});
