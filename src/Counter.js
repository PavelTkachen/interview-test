import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
    
    constructor (){
        super();
        this.state = {
           counterOne: 7,
           counterTwo: 7,
        }
        this.handleClickBlockOne= this.handleClickBlockOne.bind(this);
        this.handleClickBlockTwo= this.handleClickBlockTwo.bind(this);
    }
    
    handleClickBlockOne(){
        this.setState(prevState=>{
            return{
                counterOne: prevState.counterOne+1,
                counterTwo: prevState.counterTwo+1,
            }
        });
    }
    handleClickBlockTwo(){
        this.setState(prevState=>{
            return {
                counterOne: prevState.counterOne+1,
                counterTwo: prevState.counterOne+2,
            }
        })
    }
    render(){
        return(
            <div>
                <div className='count'>
                    <h1 className='text'>{this.state.counterOne}</h1>
                    <div onClick={this.handleClickBlockOne} className='click'>Block №1</div>
                </div> 
                <div className='count'>
                    <h1 className='text'>{this.state.counterTwo}</h1>
                    <div onClick={this.handleClickBlockTwo} className='click'>Block №2</div>
                </div>
            </div>    
        );
    }
}

export default Counter;