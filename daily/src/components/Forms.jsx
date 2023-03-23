import React, { Component } from 'react';

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    };
  }

  // function to update input
  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    e.preventDefault();
    // create items with uniqueid
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.trim()
    };

    if (newItem.value !== '') {
      // create a copy of current list of items
      const list = [...this.state.list];

      // add new items to list
      list.push(newItem);

      // update state with new list and reset new items
      this.setState({
        list,
        newItem: ''
      });
    }
  }
  // We want to be able to delete itens so we need a function for this
  deleteItem(id) {
    // capy list current list items
    const list = [...this.state.list];

    // filter though our list
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <form className="the_form" onSubmit={this.handleSumbit}>
          <input
            type="text"
            className="forms_todao"
            placeholder="What would like to add to your task today"
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button type="submit" className="add_btn" onClick={() => this.addItem()}>
            Add your List
          </button>
        </form>

        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
