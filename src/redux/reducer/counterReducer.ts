const initialState = {
    enable: "A",
    valA: 0,
    valB: 100,
};

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_ENABLE":
            return { ...state, enable: action.payload };
        case "INCREMENT_A":
            return { ...state, valA: state.valA + 10 };
        case "DECREMENT_B":
            return { ...state, valB: state.valB - 10 };
        case "RESET_A":
            return { ...state, valA: 0 };
        case "RESET_B":
            return { ...state, valB: 100 };
        default:
            return state;
    }
};

export default counterReducer;