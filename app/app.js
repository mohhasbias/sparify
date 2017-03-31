var diffhtml = require('diffhtml');
var yo = require('yo-yo');

// inject stylesheet
require('./app.scss');

var html = yo`
  <div>
    <h1>Hello from ${__filename}</h1>
    <p class="lead">Bootstrap is supported through <code>app.scss</code></p>
  </div>
`;

var el = document.getElementById('app');

diffhtml.innerHTML(el, html);