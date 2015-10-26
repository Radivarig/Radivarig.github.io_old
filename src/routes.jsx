var React = require('react')
var Router = require('react-router')
  , { Route, DefaultRoute, RouteHandler, Navigation } = Router

var App = React.createClass({
  handleChange: function(name, e) {
    var chg = {}
    chg[name] = e.target ? e.target.value : e
    this.setState(chg)
  }
, componentDidMount: function() {
    document.body.style.backgroundColor = '#C7D1CE'
  }
, render: function() {
    var self = this
    return (
      <div>
        <div style={{textAlign: 'center'}}>

          <hr/>

          <h3>Name of the project</h3>

          <hr/>
        </div>

        <RouteHandler/>

      </div>
    )
  }
})

//    <DefaultRoute name="demo" handler={Demo}/>
var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
)

module.exports = routes
