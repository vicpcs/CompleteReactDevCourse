class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions () {
    this.setState(() => ( { options: [] } ));
  }
  handlePick () {
    const randomNum = Math.floor((Math.random() * this.state.options.length));
    const decision = this.state.options[randomNum]
    alert(decision)
  }
  handleAddOption (newOption) {
    if( !newOption ) {
      return 'Enter valid value to add item.'
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists.'
    } 

    this.setState((prevState) => ({options: prevState.options.concat(newOption)}))
  }
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  const { hasOptions, handlePick } = props
  return (
    <div>
      <button
        onClick={handlePick}
        disabled={!hasOptions}
      >
      What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  const { handleDeleteOptions } = props
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {props.options.map((option) => <Option key={option} optionText={option}/>)}
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption (e) {
    e.preventDefault();
    const input = e.target.option.value.trim();
    const error = this.props.handleAddOption(input);

    this.setState(() => ({error}))
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
