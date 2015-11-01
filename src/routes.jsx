var React = require('react')
var Router = require('react-router')
  , { Route, DefaultRoute, History } = Router

var SpeedReaderViewer = require('../react-speed-reader/src/SpeedReaderViewer.jsx')
var PopupsViewer = require('../react-popups/src/PopupsViewer.jsx')

var GithubRibbon = require('./Components/GithubRibbon.jsx')
var GithubButton = require('./Components/GithubButton.jsx')
var TwitterFollowButton = require('./Components/TwitterFollowButton.jsx')

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
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-speed-reader' }
          ]
        }
      , {
          repoName: 'react-popups'
        , displayName: 'React Popups'
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-popups' }
          ]
        }
      ]
    }
  }
, componentDidMount: function() {
    document.body.style.backgroundColor = 'rgb(210, 212, 214)'
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

    var displayTab = this.state.tabs[activeTab]
    var links = displayTab.links ? displayTab.links.map(function(x, i){
      return (
        <span key={i}>
          { i !== 0 ? ', ' : '' } 
          <a href={x.link}>{x.name}</a>
        </span>
      )
    }) : ''
    return (
      <div>
        <GithubRibbon gitHref={'Radivarig/' +displayTab.repoName} />

        <div style={{textAlign: 'center'}}>

          <div>{Tabs}</div>
          <hr/>
          <TwitterFollowButton user='Radivarig' showCount={true} />
          <h3>
            {displayTab.displayName}
            <span style={{position: 'absolute', transform: 'translate(75%)'}}>
            <GithubButton
              user='Radivarig'
              repo={displayTab.repoName}
              key={displayTab.repoName}
              type={'star'}
              showCount={true}
              />

          </span>
          </h3>
          { links ? <span>More info: {links}</span> : {} }
          <hr/>
        </div>

        {self.props.children}

      </div>
    )
  }
})

var MyLink = React.createClass({
  mixins: [ History ]
, handleClick: function() {
    //this.history.pushState(null, `/users/${user.id}`, query);
    this.history.replaceState(null, `/${this.props.name}`)
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

//    <DefaultRoute component={Demo}/>
var routes = (
  <Route path="/" component={App}>
    <Route path="/react-speed-reader" component={SpeedReaderViewer} />
    <Route path="/react-popups" component={PopupsViewer} />

  </Route>
)

module.exports = routes
