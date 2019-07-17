export const recivedNum = (op, inputNum, preNum) => {
    return {
        type: 'REC_CAL',
        op,
        inputNum,
        preNum,
    };
};

export const inputNum = (inputNum, areNumClick) => {
    return {
        type: 'INPUT_CAL',
        inputNum,
        areNumClick,
    };
};

export const previousNum = (pre_Num, inputNum) => {
    return {
        type: 'PRE_CAL',
        preNum: inputNum,
    }
};

export const resultNum = (result,areEqualClick) => {
    return {
        type: 'RLT_CAL',
        result,
        areEqualClick,
    }
};

