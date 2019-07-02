const calculate = (state = {num: 0, inputNum: 0, preNum: 0, result: 0, currentOP: null}, action) => {
    console.log('calReducer', action);
    switch (action.type) {
        case 'REC_CAL':
            return {
                ...state,
                currentOP: action.op,
                inputNum: action.inputNum,
                preNum: action.preNum,

            };

        case 'INPUT_CAL':
            console.log('reducer state', {...state, inputNum: action.inputNum});
            return {...state, inputNum: action.inputNum};

        case 'PRE_CAL':
            console.log('reducer state', {...state, preNum: action.inputNum});
            return {...state, preNum: action.inputNum};

        case 'RLT_CAL':
            console.log('reducer state', {...state, result: action.result});
            return {...state, result: action.result};


        default:
            return state;
    }
};

export default calculate;