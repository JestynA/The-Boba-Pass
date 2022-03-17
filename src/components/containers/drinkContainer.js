import React , { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../reducers/actions'

import DrinkCreator from '../creators/drinkCreator';

import './drinkContainer.css'


const mapStateToProps = state => {
    return({
        drinkList : state.drinkList       
    })
}

const mapDispatchToProps = dispatch => {
    return {
        addDrink : (drinkInfo) => dispatch(actions.addDrinkCreator(drinkInfo)),
        deleteDrink : (drinkDelInfo) => dispatch(actions.deleteDrinkCreator(drinkDelInfo))
    }
}

class drinkContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
          return (
        <div id='drinkContainer'>
            <DrinkCreator addDrink={this.props.addDrink} deleteDrink={this.props.deleteDrink}/>
            
        </div>
    );  
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(drinkContainer);