let Map = require("immutable").Map;
let reducer = function(state = new Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            console.log("reducer SET_STATE");
            return state.merge(action.state);
        case "ADD_PHONE":
            console.log("reducer ADD_PHONE");
            return state.update("phones", (phones) => phones.push(action.phone));
        case "DELETE_PHONE":
            console.log("reducer DELETE_PHONE");
            return state.update("phones",
                (phones) => phones.filterNot(
                    (item) => item === action.phone
                )
            );
    }
    return state;
};

export default reducer;