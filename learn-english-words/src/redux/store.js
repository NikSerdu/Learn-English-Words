import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { engRusRandomReducer } from './reducers/engRusRandom-reducer'
import { dictionaryReducer } from './reducers/dictionary-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { mainDataReducer } from './reducers/mainData-reducer'
import { favouriteReducer } from './reducers/favourite-reducer'
import { dictionariesReducer } from './reducers/dictionaries-reducer'
import { chooseTranslateReducer } from './reducers/chooseTranslate-reducer'
const reducers = combineReducers({
    engRusRandom: engRusRandomReducer,
    chooseTranslate: chooseTranslateReducer,
    dictionary: dictionaryReducer,
    mainData: mainDataReducer,
    favourites: favouriteReducer,
    dictionaries: dictionariesReducer
})

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))