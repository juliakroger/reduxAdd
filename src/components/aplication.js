import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actions from '../actions/actions';

class Aplication extends React.Component {
	render(){
		const { value, addOne, subOne } = this.props;
		return (
			<div>
			<h1>{value}</h1>
		    <input 
		    onClick={() => addOne()}
		    className="inputButton" 
		    type="submit" 
		    value="+" />
		    <input 
		    onClick={() => subOne()}
		    className="inputButton" 
		    type="submit" 
		    value="-" />
			</div>
		);
    }
}

const mapStateToProps = state => ({
	value: state.values.value
})


export default connect(mapStateToProps, actions)(Aplication);