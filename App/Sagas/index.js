import { takeLatest } from "redux-saga/effects";
import API from "../Services/Api";

/*----------------TYPES------------------*/

import { CocktailsTypes } from "../Redux/CocktailsRedux";

/*------------------SAGAS-------------------*/
import { getAllCocktails } from "./CocktailsSagas";

/*------------------API----------------------*/
const api = API.create();

/*--------CONNECT TYPES TO SAGAS----------------*/

export default function* root() {
    yield[
        takeLatest(CocktailsTypes.GET_COCKTAILS_REQUEST, getAllCocktails, api),
    ]
}