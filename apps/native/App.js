import { StatusBar } from 'expo-status-bar';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Text, View } from 'react-native';

// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: 'https://vibecheck.hasura.app/v1/graphql',
//   cache: new InMemoryCache()
// });

export default function App() {
  return (
    <View>
      <Text>VibeCheck</Text>
      <StatusBar style="auto" />
    </View>
  );
}
