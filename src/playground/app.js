class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount () {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {} // Do nothing at all
    
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  handleDeleteOptions () {
    this.setState(() => ( { options: [] } ));
  }
  handleDeleteOption (optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => (optionToRemove !== option))
    })
    )
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
    const subtitle = 'Put your life in the hands of a computer'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
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
  const { handleDeleteOptions, handleDeleteOption } = props
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started! </p>}
      {
        props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={handleDeleteOption}/>
        ))
      }
    </div>
  )
}

const Option = (props) => {
  const { optionText, handleDeleteOption } = props
  return (
    <div>
      {optionText}
      <button 
        onClick={(e) => handleDeleteOption(optionText)}
      >
        Remove
      </button>
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

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
