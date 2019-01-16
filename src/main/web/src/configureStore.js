import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware
            )
        )
    );
}
