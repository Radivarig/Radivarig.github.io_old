var React = require('react')
var Router = require('react-router')
  , { Route, DefaultRoute, RouteHandler, Navigation } = Router

var App = React.createClass({
  handleChange: function(name, e) {
    var chg = {}
    chg[name] = e.target ? e.target.value : e
    this.setState(chg)
  }
, render: function() {
    return (
      <div>
        test
        <RouteHandler/>
      </div>
    )
  }
})

    //<DefaultRoute name="demo" handler={Demo}/>
var routes = (
  <Route name="app" path="/" handler={App}>
  </Route>
)

module.exports = routes
