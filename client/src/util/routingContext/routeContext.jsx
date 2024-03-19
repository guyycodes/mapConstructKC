import React, { useContext, useReducer } from "react";
import { reducer } from "./reducers";
// here we are creating a context to pass around the app
const RouteContext = React.createContext()

export const useRouteContext = () => useContext(RouteContext)

const initialState = {
    Routes : {
        fullRehabs: "",
        investmentPropertyAnalysis: "", 
        kitchen: "",   
        bathroom: "",     
        roomAddition: "",    
        hotelProjectImprovmentPlans: "",
        delinquentSalesTaxAudition: "",
        gallery: "",   
        blog: "",     
        cityCode: "",    
        avaliableHomes: "",
        contact: "",
        search: "",
        home: "",
        paymentGateway: "",
        residential: "",
        commercialServices: "",
    }
  };

export const RouteContextProvider = ({ children })=>{
    const [state, dispatch] = useReducer(reducer, initialState);



    return (
        <RouteContext.Provider value={{...state, dispatch}}>
        {children}
        </RouteContext.Provider>
    )
}

// create reducers and actions