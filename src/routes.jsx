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
      , {
          repoName: 'react-popups'
        , displayName: 'React Popups'
        }
      ]
    }
  }
, componentDidMount: function() {
    document.body.style.backgroundColor = '#F7F1FE'
  }
, render: function() {
    var self = this

//    var tabStyle = {}
    var urlHash = location.href.split('#')[1]
    var activeTab = 0
    var Tabs = this.state.tabs.map(function(x, i) {
      var isActive = false
      if (urlHash == '/' +x.repoName) {
        activeTab = i
        isActive = true
      }
      var handleClick = function() {}
      return (
        <MyLink onClick={handleClick}
                name={x.repoName}
                key={i}
                isActive={isActive}
                >
          {x.displayName}
        </MyLink>
      )
    })

    return (
      <div>
        <div style={{textAlign: 'center'}}>

          <hr/>
          <div>{Tabs}</div>
          <h3>{this.state.tabs[activeTab].displayName}</h3>

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
      <button disabled={this.props.isActive}
              onClick={this.handleClick}
              >
        {this.props.children}
      </button>
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
