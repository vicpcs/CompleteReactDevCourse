'use strict';

var app = {
  title: 'Visibilty Toggle',
  details: 'The secret message is here!',
  detailsShowing: false
};

var onToggle = function onToggle() {
  app.detailsShowing = !app.detailsShowing;
  renderApp();
};

var appRoot = document.getElementById('app');
var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      app.detailsShowing ? 'Hide' : 'Show',
      ' Details'
    ),
    app.detailsShowing && React.createElement(
      'p',
      null,
      app.details
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
