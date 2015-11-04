import React from 'react';

export default React.createClass({

	let complete = model.isComplete();
	let fa = complete ? 'undo' : 'close';
	let action = complete ? 'undo' : 'remove';


  render(model, id) {
    return (
	    <li className="todo">
	      <span className="title {complete ? 'complete' : ''}">
	        {this.props.title}
	      </span>
	      <button className="{this.props.action}" data-id="{model.id}">
	        <i className="fa fa-{fa}"></i>
	      </button>
	    </li>
      
    );
  }

});