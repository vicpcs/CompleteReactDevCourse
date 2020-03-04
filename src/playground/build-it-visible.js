const app = {
  title: 'Visibilty Toggle',
  details: 'The secret message is here!',
  detailsShowing: false,
};

const onToggle = () => {
  app.detailsShowing = !app.detailsShowing;
  renderApp();
};

var appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggle}>{app.detailsShowing ? 'Hide' : 'Show'} Details</button>
      {app.detailsShowing && <p>{app.details}</p>}
    </div>
  )
  ReactDOM.render(template, appRoot);
};

renderApp();