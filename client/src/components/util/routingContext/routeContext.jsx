import React, { useContext } from "react";

const RouteContext = React.createContext()

export const useRouteContext = () => useContext(RouteContext)

export const RouteContextProvider = ({ children })=>{
    
    const Routes = {
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
    };


    return (
        <RouteContext.Provider value={{Routes}}>
        {children}
        </RouteContext.Provider>
    )
}

// create reducers and actions