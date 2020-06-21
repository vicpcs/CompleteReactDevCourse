import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  
  handleAddOption = (e) => {
    e.preventDefault();
    const input = e.target.option.value.trim();
    const error = this.props.handleAddOption(input);

    this.setState(() => ({error}));

    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
