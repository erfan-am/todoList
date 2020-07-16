import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' ;
import {textReducer} from './Texts/Text-reducer'
const persistConfig={
    key:'root',
    storage,
    whitelist:['text']
}
 const rootReducer=combineReducers({
    text:textReducer
})



export default persistReducer(persistConfig,rootReducer)