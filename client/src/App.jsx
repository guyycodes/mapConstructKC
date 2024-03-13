import React, { useEffect,useContext,useState } from 'react'
import { Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Home } from './components/Home/Home';
import { useRouteContext } from './components/util/routingContext/routeContext';
// import {Services} from './pages/admin/services'
// import ProtectedRoutes from './pages/ProtectedRoutes/protectedRoutes';




// Set up an Apollo client to point towards graphql backend
const httpLink = createHttpLink({
  uri: 'http://localhost:3002/graphql', // GraphQL endpoint
});

// context for JWT
const authLink = setContext((_, { headers }) => {
  // Get token from local storage
  const token = localStorage.getItem('id_token');
  // Return the headers to the context
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// httpLink defines where the GraphQL server is hosted. 
// authLink used for setting any headers that need to be attached to your requests.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // routing context
  const routeContext = useRouteContext();

  // setting up the state hook for routing state
  // const [state, setState] = useState(routeContext);


  useEffect(() => {
    console.log("useEffect state: ", routeContext);
  }, [routeContext]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<Home />} />
          {/* create Service and booking routed in another route called protected routes */}
        {/* <Route path="/services" element={<ProtectedRoutes element={<Residential />} />} /> */}
          {/* Appointments page Route */}
        {/* <Route path="/booking" element={<ProtectedRoutes element={<commercial />} />} /> */}

          {/* Reviews page Route */}
          {/* <Route path="/reviews" element={<ProtectedRoutes element={<Reviews />} />} /> */}

          {/* Privacy Policy Route */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* Terms of use Route */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
      </>
      )
    )
  return (
    <>
     
      <ApolloProvider client={client}>


       
          <RouterProvider router={router}/>
        


      </ApolloProvider>

    </>
  )
}

export default App
