var React = require('react')
var Router = require('react-router')
  , { Route, DefaultRoute, History, IndexRoute } = Router

var SpeedReaderViewer = require('../react-speed-reader/src/SpeedReaderViewer.jsx')
var PopupsViewer = require('../react-popups/src/PopupsViewer.jsx')

var GithubRibbon = require('./Components/GithubRibbon.jsx')
var GithubButton = require('./Components/GithubButton.jsx')
var TwitterFollowButton = require('./Components/TwitterFollowButton.jsx')

var SimpleYoutube = require('./Components/SimpleYoutube.jsx')

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
       , {
          repoName: 'CommentCollapser'
        , displayName: 'Facebook Comment Collapser'
        , links:  [
            { name: 'firefox', link: 'https://addons.mozilla.org/en-us/firefox/addon/commentcollapser/' }
          , { name: 'chrome', link: 'https://chrome.google.com/webstore/detail/comment-collapser/glckkkgoiekmhgdkcogfmbecdkbnangb?hl=en' }
          ]
        }
      , {
          repoName: 'UvSquares'
        , displayName: 'Blender UV Squares'
        , links:  [
            { name: 'CGCookie', link: 'https://cgcookiemarkets.com/all-products/uv-squares/' }
          ]
        }
      , {
          repoName: 'Edger'
        , displayName: 'Blender Edger'
        , links:  [
            { name: 'BlenderArtists', link: 'http://blenderartists.org/forum/showthread.php?358615'}
          ]
        }
      , {
          pathName: 'unity3d-projects'
        , displayName: 'Unity3d Projects'
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
    var activeTab = -1
    var Tabs = this.state.tabs.map(function(x, i) {
      var isActive = false
      if (urlHash == '/' +(x.pathName || x.repoName)) {
        activeTab = i
        isActive = true
      }
      var handleClick = function() {}
      return (
        <MyLink onClick={handleClick}
                name={(x.pathName || x.repoName)}
                key={i}
                isActive={isActive}
                >
          {x.displayName}
        </MyLink>
      )
    })

    var displayTab = activeTab > -1 ? this.state.tabs[activeTab] : {}
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
        <GithubRibbon gitHref={'Radivarig/' +(displayTab.repoName || '')} />

        <div style={{textAlign: 'center'}}>

          <div>{Tabs}</div>
          <hr/>
          <TwitterFollowButton user='Radivarig' showCount={true} />
          <h3>
            {displayTab.displayName}
            <span style={{position: 'absolute', transform: 'translate(75%)'}}>
            {
              activeTab > -1 && displayTab.repoName !== undefined ?
              <GithubButton
                user='Radivarig'
                repo={displayTab.repoName}
                key={displayTab.repoName}
                type={'star'}
                showCount={true}
                />
              : ''
            }

          </span>
          </h3>
          { links ? <span>More info: {links}</span> : '' }
          <hr/>
        </div>

        {self.props.children}

        <StatCounter />
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

var Unity3dProjectsViewer = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>

        <ul style={{margin: 'auto', width: '60%', textAlign: 'left'}}>

          <li>
            <a href='https://github.com/Unity3D-Wine-Support/Unity3D-on-Wine/blob/master/text-editors-MonoDevelop/unity3d_native_monodevelop.sh'>
            External editor </a>
            bash script for bypassing MonoDevelop path issues when opening files in Unity3d running over Wine on Linux.
          </li>

          <li>
            <a href='https://github.com/Radivarig/ZileKiticMile/blob/master/ZilaGUI.cs'>
            Veiner</a>
            , image marking application for Faculty of Medicine student used for automatization of tracking and comparing veins, made in Unity3d.
          </li>

          <li>
            <a href='https://github.com/Radivarig/ProceduralMeshColliders/blob/master/Assets/Abiogenesis3d/Procedural%20Mesh%20Colliders/ProceduralMesh.cs'>
            Procedural Mesh Collider </a>
            generator asset for Unity3d.
          </li>

          <li>
            <a href='https://github.com/Radivarig/AssetHandler/tree/master/Assets'>
            Asset Handler</a>
            , tool for handling .asset files using UnityEditor namespace.
          </li>

        </ul>

      </div>
    )
  }
})

var NotFoundViewer = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
      ?
      <img style={{width: 200, height: 200}} src='http://i.imgur.com/0opRxl2.gif' />
      </div>
    )
  }
})

var ProfileViewer = React.createClass({
  render: function() {
    return (
      <div style={{textAlign: 'center'}}>
        <img style={{width: 200, height: 200}} src='https://avatars0.githubusercontent.com/u/6281737?v=3&s=460' />
      </div>
    )
  }
})


var StatCounter = React.createClass({
  render: function() {
    var sc_project=10672857
    var sc_invisible=0
    var sc_security="f4016a86"
    var scJsHost = (("https:" == document.location.protocol) ?
      "https://secure." : "http://www.")
    document.write("<sc"+"ript type='text/javascript' src='" +
    scJsHost +"statcounter.com/counter/counter.js'></"+"script>")

    return (
      <div className="statcounter">
        <a title="create counter"
            href="http://statcounter.com/free-hit-counter/"
            target="_blank">
          <img className="statcounter"
                src="http://c.statcounter.com/10672857/0/f4016a86/0/"
                alt="create counter" />
        </a>
      </div>
    )
  }
})



// === Youtube Viewers

var CommentCollapserViewer = React.createClass({ render: function() {
  return <SimpleYoutube url={'https://www.youtube.com/watch?v=bAex9ILC3uo'} />}})

var UvSquaresViewer = React.createClass({ render: function() {
  return <SimpleYoutube url={'https://www.youtube.com/watch?v=VYZnGIql2UI'} />}})

var EdgerViewer = React.createClass({ render: function() {
  return <SimpleYoutube url={'https://www.youtube.com/watch?v=ToHbROhUrEc'} />}})


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ProfileViewer} />
    <Route path="/react-speed-reader" component={SpeedReaderViewer} />
    <Route path="/react-popups" component={PopupsViewer} />
    <Route path="/CommentCollapser" component={CommentCollapserViewer} />
    <Route path="/UvSquares" component={UvSquaresViewer} />
    <Route path="/Edger" component={EdgerViewer} />
    <Route path="/unity3d-projects" component={Unity3dProjectsViewer} />
    <Route path='/*' component={NotFoundViewer} />
  </Route>
)

module.exports = routes
