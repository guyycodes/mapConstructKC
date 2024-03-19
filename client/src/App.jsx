import React, { useEffect, useState} from 'react'
import { Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { Home } from './views/Home/Home';
import { useRouteContext } from './util/routingContext/routeContext';
// import {Services} from './pages/admin/services'
// import ProtectedRoutes from './pages/ProtectedRoutes/protectedRoutes';
import { About } from './views/About/AboutServices';
import { FullRehabs } from './views/FullRehabs/FullRehabs'
import { PromoSection } from './views/Promo/Promo';
import { InvestmentPropertyAnalysis } from './views/InvestmentPropertyAnalysis/InvestmentProperty'
import { Kitchens } from './views/Kitchen/kitchens';
import { Bathroom } from './views/Bathroom/Bathrooms';
import { RoomAddition } from './views/RoomAddition/RoomAdditions';
import { AboutUs } from './views/About/AboutUs/About';
import { WorkStatistics } from './components/Statistics/Stats.jsx';
import { BlogComponent } from './views/Blog/BlogComponent';
import { HotelProjectComponent } from './views/Commercial/HotelImprovemnt/HotelProjects.jsx'
import { DelinquentTax } from './views/Commercial/DelinquentSalesTax/DelinquentSalesTax.jsx'
import { Contact } from './views/Contact/ContactPage.jsx'
import { PaymentPortal } from './components/Payments/Payment.jsx'
import { AllCommercial } from './views/CommercialServices/AllCommercialServices.jsx'
import { ResidentialSection } from './views/ResidentialServices/Residential.jsx'
import { AvailableHomes } from './views/AvailableHomes/HomeCards/HomeCardsComponent.jsx';
import { ChatContainer } from './components/ChatBot/ChatContainer.jsx';

  // Set up an Apollo client to point towards graphql backend
// const httpLink = createHttpLink({
//   uri: 'http://localhost:3002/graphql', // GraphQL endpoint
// });

  // context for JWT
// const authLink = setContext((_, { headers }) => {
  // Get token from local storage
// const token = localStorage.getItem('id_token');
  // Return the headers to the context
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// httpLink defines where the GraphQL server is hosted. 
// authLink used for setting any headers that need to be attached to your requests.
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
// routing context this allows access to routes selected in all parts of the app 
// all routes that use 'const { dispatch } = useRouteContext();' and dispatch their routes to the context API, will be able to controll routing
  const routeContext = useRouteContext();
  
  const [currentView, setCurrentView] = useState('/');

  const printElementWithValueOne = (context) => {
    // Loop through each property in the object
    for (const key in context) {
        // Check if the property's value is strictly equal to 1
        if (context[key] === 1) {
          if(key === 'home'){
            setCurrentView(`/`)
          }else{
            setCurrentView(`/${key}`)
          }
        }
        console.log(currentView)
    }
};

  useEffect(() => {

  // Call the function with your context
  printElementWithValueOne(routeContext);
    // setCurrentView(url);
    console.log("useEffect state: ", routeContext);
  }, [routeContext]);

// proper routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<Home />} />
          {/* create Service and booking routed in another route called protected routes */}
          <Route path="/fullRehabs" index element={<Home />} />
          {/* Appointments page Route */}
          <Route path="/investmentPropertyAnalysis" index element={<Home />} />
          <Route path="/kitchen" index element={<Home />} />
          <Route path="/bathroom" index element={<Home />} />
          <Route path="/roomAddition" index element={<Home />} />
          <Route path="/hotelProjectImprovmentPlans" index element={<Home />} />
          <Route path="/delinquentSalesTaxAudition" index element={<Home />} />
          <Route path="/aboutUs" index element={<Home />} />
          <Route path="/gallery" index element={<Home />} />
          <Route path="/blog" index element={<Home />} />
          <Route path="/cityCode" index element={<Home />} />
          <Route path="/avaliableHomes" index element={<Home />} />
          <Route path="/contact" index element={<Home />} />
          <Route path="/search" index element={<Home />} />
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
     
      {/* <ApolloProvider client={client}> */}

    {/* Sudo routing*/}
      {currentView === '/' && <Home Component={<About />} Component2={<PromoSection />} Component3={<WorkStatistics />} componentBehavior={"RenderTestimonials"} />}
      {currentView === '/fullRehabs' && <Home Component={<FullRehabs />} />}
      {currentView === '/investmentPropertyAnalysis' && <Home Component={<InvestmentPropertyAnalysis />} />}
      {currentView === '/kitchen' && <Home Component={<Kitchens />} />}
      {currentView === '/bathroom' && <Home Component={<Bathroom />} />}
      {currentView === '/roomAddition' && <Home Component={<RoomAddition />} />}
      {currentView === '/hotelProjectImprovmentPlans' && <Home Component={<HotelProjectComponent />} />}
      {currentView === '/delinquentSalesTaxAudition' && <Home Component={<DelinquentTax />}/>}
      {currentView === '/aboutUs' && <Home Component={<AboutUs />} componentBehavior={"DontRenderWorkSection"} />}
      {currentView === '/gallery' && <Home/>}
      {currentView === '/blog' && <Home Component={<BlogComponent />} />}
      {currentView === '/cityCode' && <Home />}
      {currentView === '/avaliableHomes' && <Home Component={<AvailableHomes />} />}
      {currentView === '/contact' && <Home Component={<Contact />} componentBehavior={"DontRenderWorkSection"} />}
      {currentView === '/paymentGateway' && <Home Component={<PaymentPortal />} />}
      {currentView === '/commercialServices' && <Home Component={<AllCommercial />} />}
      {currentView === '/residential' && <Home Component={<ResidentialSection/>} />}

      <ChatContainer/>
      {/* Proper Routing */}
          {/* <RouterProvider router={router}/> */}
        


      {/* </ApolloProvider> */}

    </>
  )
}

export default App
