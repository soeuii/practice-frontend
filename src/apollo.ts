import { ApolloClient, InMemoryCache, InMemoryCacheConfig, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          }
        }
      }
    }
  }),
});