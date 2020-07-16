import *as acionTypes  from '../actiontypes';
import { store } from '../store';

const Initial={
    texts:[],
    fontSize:'',
    fontName:''
}


export const textReducer=(state=Initial,action)=>{
    switch (action.type) {
       case acionTypes.TEXTS:
           return{
               ...state,
               texts:[...state.texts,action.payload]
           }
        case acionTypes.DELETE_TEXT:
            return{
                ...state,
                texts:state.texts.filter(text=>text.id !== action.payload.id)
            }
        case acionTypes.FONT_LOW:
            return{

                ...state,
                fontSize:'10px',
                fontName:'Low'
             }
        case acionTypes.FONT_MEDIUM:
            return{

                ...state,
                fontSize:'15px',
                fontName:'Medium'
            }  
        case acionTypes.FONT_HIGH:
                return{
    
                    ...state,
                    fontSize:'20px',
                    fontName:'High'
                }
        case acionTypes.EDITE_ENTER:
            return{
                ...state,
                texts:state.texts.filter(text=>text.id !== action.payload.id)
            }
        default:
          return state
    }
}