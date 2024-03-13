import { FULL_REHABS, 
    INVESTMENT_PROPERTY_ANALYSIS, 
    KITCHEN, BATHROOM, ROOM_ADDITION, HOTEL_PROJECT_IMPROVEMENT_PLANS, 
    DELINQUENT_SALES_TAX_AUDITION, ABOUT_US, 
    GALLERY, BLOG, CITY_CODE, 
    AVALIABLE_HOMES, 
    CONTACT,
    SEARCH } from './actions/actions'

export const reducer = (state, action) => {
    switch (action.type){
        case FULL_REHABS : {
            return {...state, fullRehabs: action.payload}
        }
        case (INVESTMENT_PROPERTY_ANALYSIS): {
            return {...state, investmentPropertyAnalysis: action.payload}
        }
        case KITCHEN : {
            return {...state, kitchen: action.payload}
        }
        case (BATHROOM): {
            return {...state, bathroom: action.payload}
        }
        case (ROOM_ADDITION): {
            return {...state, roomAddition: action.payload}
        }
        case (HOTEL_PROJECT_IMPROVEMENT_PLANS): {
            return {...state, hotelProjectImprovmentPlans: action.payload}
        }
        case DELINQUENT_SALES_TAX_AUDITION : {
            return {...state, delinquentSalesTaxAudition: action.payload}
        }
        case (ABOUT_US): {
            return {...state, aboutUs: action.payload}
        }
        case (GALLERY): {
            return {...state, gallery: action.payload}
        }
        case (BLOG): {
            return {...state, blog: action.payload}
        }
        case (CITY_CODE): {
            return {...state, cityCode: action.payload}
        }
        case (AVALIABLE_HOMES): {
            return {...state, avaliableHomes: action.payload}
        }
        case (CONTACT): {
            return {...state, contact: action.payload}
        }
        case (SEARCH): {
            return {...state, search: action.payload}
        }
    }
}