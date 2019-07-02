export const recivedNum = (op, inputNum, preNum) => {
    return {
        type: 'REC_CAL',
        op,
        inputNum,
        preNum,
    };
};

export const inputNum = (inputNum) => {
    return {
        type: 'INPUT_CAL',
        inputNum,
    };
};

export const previousNum = (pre_Num, inputNum) => {
    return {
        type: 'PRE_CAL',
        preNum: inputNum,
    }
};

export const  resultNum = (resultNum) => {
    return{
        type: 'RLT_CAL',
        resultNum,
    }
};
