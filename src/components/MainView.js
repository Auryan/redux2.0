import React, {Component} from 'react';
import {connect} from 'react-redux';

import {recivedNum} from '../actions/calcuate';
import {inputNum} from "../actions/calcuate";
import {previousNum} from "../actions/calcuate";
import {resultNum} from "../actions/calcuate";
import "./main.css"

class MainView extends Component {


    handleNumOnclick = (num) => {
        const {inputValue, inputNum} = this.props;

        console.log('num', num);
        inputValue(inputNum * 10 + num, true);
    };

    handleOPonclick = (op) => {
        console.log("op", op);
        const {inputNum, preNum, actionOfValue, resultValue, opreator,inputValue} = this.props;

        if (op === 'EQUAL') {
            switch (opreator) {
                case 'ADD':
                    resultValue(preNum + inputNum, true);
                    break;
                case 'MINUS':
                    resultValue(preNum - inputNum, true);
                    break;
                case 'TIMES':
                    resultValue(preNum * inputNum, true);
                    break;
                case 'DIVIDE':
                    resultValue(preNum / inputNum, true);
                    break;
                default:
                    console.log('opreator load error');
            }
        } else if (op === 'CLEAN') {
            actionOfValue(null, 0, 0);
            resultValue(0, false);
            inputValue(0,false);
        } else {
            actionOfValue(op, 0, inputNum);
        }
    };

    componentDidMount() {
        console.log('componentDidMount');
    }


    render() {

        const {inputNum, preNum, opreator, result, areEqualClick, areNumClick} = this.props;
        console.log('areEqualclick', areEqualClick);

        console.log('this.props.state.num', this.props.num);


        return (
            <div>
                <div className="calculaterBox">
                    <div className="displayNum">
                        {/*{!areEqualClick &&*/}
                        {/*<span>{inputNum}</span>*/}
                        {/*}*/}
                        {/*{areEqualClick &&*/}
                        {/*<span>{result}</span>*/}
                        {/*}*/}

                        {areEqualClick ?
                             (<span>{result}</span>) : (
                                 <span>{inputNum}</span>)}
                    </div>

                    <div className="firstLine">
                        <button className="fuHaoFirstLine"
                                onClick={() => this.handleOPonclick('CLEAN')}>
                            {/*{!areNumClick && 'AC'}*/}
                            {/*{areNumClick && 'C'}*/}

                            {areNumClick ?
                                ('C') : ('AC')}
                        </button>
                        <button className="fuHaoFirstLine">+/-</button>
                        <button className="fuHaoFirstLine">%</button>
                        <button className="symboColor" onClick={() => this.handleOPonclick('DIVIDE')}>÷</button>
                    </div>

                    <div className="firstLine">
                        <button className="numberColor" onClick={() => this.handleNumOnclick(7)}>7</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(8)}>8</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(9)}>9</button>
                        <button className="symboColor" onClick={() => this.handleOPonclick('TIMES')}> X</button>

                    </div>

                    <div className="firstLine">
                        <button className="numberColor" onClick={() => this.handleNumOnclick(4)}>4</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(5)}>5</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(6)}>6</button>
                        <button className="symboColor" onClick={() => this.handleOPonclick('MINUS')}> -</button>
                    </div>
                    <div className="firstLine">
                        <button className="numberColor" onClick={() => this.handleNumOnclick(1)}>1</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(2)}>2</button>
                        <button className="numberColor" onClick={() => this.handleNumOnclick(3)}>3</button>
                        <button className="symboColor" onClick={() => this.handleOPonclick('ADD')}> +</button>

                    </div>

                    <div>
                        <button className="zero numberColor" onClick={() => this.handleNumOnclick(0)}>0</button>
                        <button className="zero numberColor" onClick={() => this.handleNumOnclick(0)}>.</button>
                        <button className="zero equalBTN" onClick={() => this.handleOPonclick('EQUAL')}> =</button>
                    </div>

                    <span>{result}</span>

                    <span>{preNum}</span>

                </div>

                <div>
                    <span>{opreator}</span>

                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        inputNum: state.calculate.inputNum,
        preNum: state.calculate.preNum,
        opreator: state.calculate.currentOP,
        result: state.calculate.result,
        areEqualClick: state.calculate.areEqualClick,
        areNumClick: state.calculate.areNumClick,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionOfValue: (op, inputNum, preNum) => {
            dispatch(recivedNum(op, inputNum, preNum));
        },

        inputValue: (value, areNumClick) => {
            dispatch(inputNum(value, areNumClick));
        },

        previousValue: (value) => {
            dispatch(previousNum(value));
        },

        resultValue: (result, areEqualClick) => {
            dispatch(resultNum(result, areEqualClick));
        }

    };

};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(MainView);