import React, { Component } from 'react'
import MiniCard from './MiniCard';
import { addCard } from '../firebase/firebase-cards';

export default class Board extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 newCardTitle: '',
		 nextCardId: 0,
		 cards: {}
	  }
	}

	incrementCardId = () => {
		const {nextCardId} = this.state;
		nextCardId++;
		this.setState({nextCardId});
	}
	
	renderCards = () => {
		const { board } = this.props;
		const { cards } = board;
		const cardsList = cards.map((value, key) => {
			return <MiniCard key={key} cardId={key} cardDetails={value}/>
		});
		return cardsList;
	}

	addCard = (e) => {
		e.preventDefault();
		const {boardId} = this.props;
		const {nextCardId} = this.state;
		const newCard = {
			id: nextCardId,
			title: ''
		};
		if(addCard(boardId, nextCardId, newCard)){
			this.setState({
				newCardTitle: ''
			});
		}
		else{

		}

	}

	newCardNameChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>{boardDetails.title}</h1>
				<ul>
					{this.renderCards}
				</ul>
				<form onSubmit={this.addCard}>
					<label htmlFor="newCardTitle">
						<input type="text" name="newCardTitle" value={this.state.newCardTitle} onChange={this.newCardNameChange}/>
					</label>
					<button type="submit">Add Card</button>
				</form>
			</div>
		)
	}
}
