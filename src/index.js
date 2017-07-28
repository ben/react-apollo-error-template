import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createBatchingNetworkInterface } from 'react-apollo';
import { networkInterface } from './graphql/networkInterface';
import App from './App';

const batchNetworkInterface = createBatchingNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/ciybssqs700el0132puboqa9b",
  batchInterval: 10
})

const client = new ApolloClient({ networkInterface: batchNetworkInterface });

ReactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>,
  document.getElementById('root'),
);
