class VisibiltyToggle extends React.Component {
  constructor (props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibilty: false,
      message: 'The secret message is here!'
    }
  }

  handleToggle() {
    this.setState((prevState) => {
      return {visibilty: !prevState.visibilty}
    })
  }

  render () {
    return (
      <div>
        <h1>Visibilty Toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.visibilty ? 'Hide' : 'Show'} Details
        </button>
        {this.state.visibilty && <p>{this.state.message}</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'))
