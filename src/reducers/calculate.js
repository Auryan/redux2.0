const calculate = (state = {num: 0, inputNum: 0, preNum: 0, result: 0,
    currentOP: null, areEqualClick: false, areNumClick: false}, action) => {
    console.log('calReducer', action);
    switch (action.type) {
        case 'REC_CAL':
            return {
                ...state,
                currentOP: action.op,
                inputNum: action.inputNum,
                preNum: action.preNum,
            };

            // input number call
        case 'INPUT_CAL':
            console.log('reducer state', {...state, inputNum: action.inputNum, areNumClick: true});
            return {...state, inputNum: action.inputNum, areNumClick: action.areNumClick};

            // private num call
        case 'PRE_CAL':
            console.log('reducer state', {...state, preNum: action.inputNum});
            return {...state, preNum: action.inputNum};

            // result call
        case 'RLT_CAL':
            console.log('Reducer of Result state', {...state, result: action.result, areEqualClick: true});
            return {...state, result: action.result, areEqualClick: action.areEqualClick};

        default:
            return state;
    }
};

export default calculate;