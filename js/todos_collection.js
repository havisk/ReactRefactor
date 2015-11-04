import React from 'react';
import Todos from './todos';

export default React.createClass({

	this.el.on('submot','form', (e) => {
		e.preventDefault();

		this.el.find('.fa-plus')
			.removeClass('fa-plus')
			.addClass('fa-spin')
			.addClass('fa-spinner');

			let data = this.el.find('form').serializeJSON();
				render());
	},
	this.el.on('click', '.remove', (e) => {
		e.preventDefault();

		let button = (e.currentTarget);
		let id = button.data('id');
		let model = this.collection.get(id);

		button.find('fa-close')
			.removeClass('fa-close')
			.addClass('fa-spin')
			.addClass('fa-spinner');

		model.save({
			completedAt: new Date().toString()
		}).then(() => this.render());
	},
	 this.el.on('click', '.undo', (e) => {
    e.preventDefault();
    // get the button from the event
    let button = (e.currentTarget);
    // get the todo id from the button
    let id = button.data('id');
    // get the model by id from the collection
    let model = this.collection.get(id);
    // convert button icon to a spinner
    button.find('.fa-undo')
      .removeClass('fa-undo')
      .addClass('fa-spin')
      .addClass('fa-spinner');
    // Clear the `completeAt` property on the todo
    model.save({
      completeAt: null
    }).then(() => this.render());
  });
	});

  render() {
    return (

      
    );
  }

});