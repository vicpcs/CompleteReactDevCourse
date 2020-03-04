console.log('App.js is running')

// JS - JavaScript XML
// Only one root element, to creat side by side elements, wrap in a single element!

const app = {
  title: 'Indecision App',
  subTitle: 'Put your life in the hands of a computer!',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  
  if(option) {
      app.options.push(option);
      e.target.elements.option.value = '';
  }
  renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options: ' : 'No Options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {app.options.map( (option, optionNumber) => <li key={option}>{option}</li> )}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();