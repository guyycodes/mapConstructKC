import React, { useContext, useReducer } from "react";
import { reducer } from "./reducers";

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