import React, {Component} from 'react';
import {connect} from 'react-redux';

import {recivedNum} from '../actions/calcuate';
import {inputNum} from "../actions/calcuate";
import {previousNum} from "../actions/calcuate";
import {resultNum} from "../actions/calcuate";

class MainView extends Component {


    state = {currentOP: null};

    handleNumOnclick = (num) => {
        const {inputValue, inputNum} = this.props;

        console.log('num', num);
        inputValue(inputNum * 10 + num);
    };

    handleOPonclick = (op) => {
        console.log("op", op);
        const {inputNum, preNum, actionOfValue, resultValue} = this.props;
        this.setState({currentOP: op});

        console.log("current OP", this.state.currentOP);

        if (op === 'EQUAL') {
            switch (this.state.currentOP) {
                case 'ADD':
                    resultValue(preNum + inputNum);
                    break;
                case 'MINUS':
                    resultValue(preNum - inputNum);
                    break;
                case 'TIMES':
                    resultValue(preNum * inputNum);
                    break;
                case 'DIVIDE':
                    resultValue(preNum / inputNum);
                    break;
                default:
                    console.log('opreator load error');
            }
        } else if (op === 'CLEAN') {
            actionOfValue(null, 0, 0);
            resultValue(0);
        } else {
            actionOfValue(op, 0, inputNum);
        }
    };

    componentDidMount() {
        console.log('componentDidMount');
    }


    render() {

        const {inputNum, preNum, opreator, result} = this.props;

        console.log('this.props.state.num', this.props.num);

        return (
            <div>
                <div>
                    <span>{inputNum}</span>
                    <button onClick={() => this.handleNumOnclick(0)}>0</button>
                    <button onClick={() => this.handleNumOnclick(1)}>1</button>
                    <button onClick={() => this.handleNumOnclick(2)}>2</button>
                    <button onClick={() => this.handleNumOnclick(3)}>3</button>
                    <button onClick={() => this.handleNumOnclick(4)}>4</button>
                    <button onClick={() => this.handleNumOnclick(5)}>5</button>
                    <button onClick={() => this.handleNumOnclick(6)}>6</button>
                    <button onClick={() => this.handleNumOnclick(7)}>7</button>
                    <button onClick={() => this.handleNumOnclick(8)}>8</button>
                    <button onClick={() => this.handleNumOnclick(9)}>9</button>
                    <span>{preNum}</span>

                </div>

                <div>
                    {/*<span>{opreator}</span>*/}
                    <span>{result}</span>
                    <button onClick={() => this.handleOPonclick('ADD')}> +</button>
                    <button onClick={() => this.handleOPonclick('MINUS')}> -</button>
                    <button onClick={() => this.handleOPonclick('TIMES')}> X</button>
                    <button onClick={() => this.handleOPonclick('DIVIDE')}> /</button>
                    <button onClick={() => this.handleOPonclick('EQUAL')}> =</button>
                    <button onClick={() => this.handleOPonclick('CLEAN')}> CLEAN</button>

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

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionOfValue: (op, inputNum, preNum) => {
            dispatch(recivedNum(op, inputNum, preNum));
        },

        inputValue: (value) => {
            dispatch(inputNum(value));
        },

        previousValue: (value) => {
            dispatch(previousNum(value));
        },

        resultValue: (result) => {
            dispatch(resultNum(result));
        }

    };

};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(MainView);