import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import Theme from './Theme'

import { RouteContextProvider } from './util/routingContext/routeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteContextProvider>
      <ChakraProvider theme={Theme}>
          <App />
      </ChakraProvider>
    </RouteContextProvider>
  </React.StrictMode>,
)
