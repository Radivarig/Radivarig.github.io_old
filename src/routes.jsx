var React = require('react')
var Router = require('react-router')
  , { Route, DefaultRoute, RouteHandler, Navigation } = Router

var SpeedReaderViewer = require('../react-speed-reader/src/SpeedReaderViewer.jsx')

var App = React.createClass({
  handleChange: function(name, e) {
    var chg = {}
    chg[name] = e.target ? e.target.value : e
    this.setState(chg)
  }
, getInitialState: function() {
    return {
      tabs: [
        {
          repoName: 'react-speed-reader'
        , displayName: 'React Speed Reader'
        }
      ]
    , activeTab: 0
    }
  }
, componentDidMount: function() {
    document.body.style.backgroundColor = '#F7F1FE'
  }
, render: function() {
    var self = this
    return (
      <div>
        <div style={{textAlign: 'center'}}>

          <hr/>

          <h3>{this.state.tabs[this.state.activeTab].displayName}</h3>

          <MyLink name='react-speed-reader'>React Speed Reader</MyLink>

          <hr/>
        </div>

        <RouteHandler/>

      </div>
    )
  }
})

var MyLink = React.createClass({
  mixins: [ Navigation ]
, handleClick: function() {
    this.replaceWith(this.props.name, this.props.params)
  }
, render: function() {
    return (
      <span onClick={this.handleClick}>{this.props.children}</span>
    )
  }
})
// this.replaceWith('/users', { userId: user.id }, query)

//    <DefaultRoute name="demo" handler={Demo}/>
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="react-speed-reader" path="/react-speed-reader" handler={SpeedReaderViewer} />

  </Route>
)

module.exports = routes
