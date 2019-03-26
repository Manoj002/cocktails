import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

export default (rootReducer, rootSaga) => {
    /*------------------REDUX CONFIGURATION---------------------------------*/
    const middleware=[]
    const enhancers=[]

    /*---------------------------SAGA MIDDLEWARE---------------------------*/
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    /*------------------------ASSEMBLE MIDDLEWARE--------------------------*/
    enhancers.push(applyMiddleware(...middleware))
    const createAppropriateStore = createStore;
    const store = createAppropriateStore(rootReducer, compose(...enhancers));

    /*-------START THE ROOT SAGA----------------*/
    sagaMiddleware.run(rootSaga);
    return store;
}