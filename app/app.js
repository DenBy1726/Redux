import React from "react"
import ReactDOM from "react-dom"
let redux = require("redux");
let Provider = require("react-redux").Provider;
import reducer from "./reducer.js"
import AppView from "./appView.js"

//связь хранилища с функцией обновления состояния.
let store = redux.createStore(reducer);

//отправка запроса на инициализацию (установка первоначального состояния)
store.dispatch({
    type: "SET_STATE",
    state: {
        phones: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
    }
});


ReactDOM.render(
    <Provider store={store}>
      <AppView />
    </Provider>,
    document.getElementById("container")
);