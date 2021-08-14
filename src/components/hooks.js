import {createStore} from 'redux';


const initState = {
    logoImg: null,
    glyphImg: null,
    title : null,
    activities : null,
    offers : null,
    duration: null,
    sponsor: null,
    webAddress: null,
    groupAction: null,
    country: null,
    city: null,
    postalCode:null,
    continentImg: null,
    whatMore: null,
}


export function sharedReducer(state,action){
    switch(action.type){
        case 'glyphImg':
            return {
                ...state,glyphImg: action.value
            };
        case 'logoImg':
            return {
                ...state,logoImg: action.value
            };
        case 'title':
            return {
                ...state,title: action.value
            };
        case 'activities':
            return {
                ...state,activities: action.value
            };
        case 'offers':
            return {
                ...state,offers: action.value
            };
        case 'duration':
            return {
                ...state,duration: action.value
            };
        case 'sponsor':
            return {
                ...state,sponsor: action.value
            };
        case 'webAddress':
            return {
                ...state,webAddress: action.value
            };
        case 'groupAction':
            return {
                ...state,groupAction: action.value
            };
        case 'country':
            return {
                ...state,country: action.value
            };
        case 'city':
            return {
                ...state,city: action.value
            };
        case 'postalCode':
            return {
                ...state,postalCode: action.value
            };
        case 'continentImg':
            return {
                ...state,continentImg: action.value
            };
        case 'whatMore':
            return {
                ...state,whatMore: action.value
            };
        default:
            console.log('Cannot set the state of provided action type.');
            return{
                ...state
            };
    }
}


export const sharedStore = createStore(sharedReducer,initState);
