import React, {Component, PropTypes} from "react";
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from "./List";
import {Link} from 'react-router';

class KanbanBoard extends Component {
	render() {
		return (
			<div className="app">
				<Link to="/new" className="float-button">+ </Link>

				<List id="todo" title="计划中" cards={
					this.props.cards.filter((card) => card.status == "todo")
				} />

				<List id="in-progress" title="进行中" cards={
					this.props.cards.filter((card) => card.status == "in-progress")
				} />

				<List id="done" title="已完成" cards={
					this.props.cards.filter((card) => card.status == "done")
				} />
				{this.props.children}
			</div>
		)
	}
}

KanbanBoard.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object)
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
