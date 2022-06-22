import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otvcld14hr01xkhbi62gwt/master',
  cache: new InMemoryCache()
})