var React = require('react')

var DragRangeViewer = require('../node_modules/react-drag-range/src/Viewer.jsx')
var SpeedReaderViewer = require('../node_modules/react-speed-reader/src/Viewer.jsx')
var PopupsViewer = require('../node_modules/react-popups/src/Viewer.jsx')
var AnyHeightViewer = require('../node_modules/react-infinite-any-height/test/Viewer.js')

var GithubRibbon = require('./Components/GithubRibbon.jsx')
var GithubButton = require('./Components/GithubButton.jsx')
var TwitterFollowButton = require('./Components/TwitterFollowButton.jsx')

var SimpleYoutube = require('./Components/SimpleYoutube.jsx')

import "style!css!./index.css"

class App extends React.Component {
  handleChange = (name, e) => {
    var chg = {}
    chg[name] = e.target ? e.target.value : e
    this.setState(chg)
  }


  getInitialState = () => {
    return {
      tabs: [
        {
          repoName: 'react-drag-range'
        , displayName: 'React Drag Range'
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-drag-range' }
          ]
        },

        {
          repoName: 'react-speed-reader'
        , displayName: 'React Speed Reader'
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-speed-reader' }
          ]
        },

        {
          repoName: 'react-popups'
        , displayName: 'React Popups'
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-popups' }
          ]
        },

        {
          repoName: 'react-infinite-any-height'
        , displayName: 'React Infinite Any Height'
        , links:  [
            { name: 'npm', link: 'https://www.npmjs.com/package/react-infinite-any-height' }
          ]
        },

         {
          repoName: 'CommentCollapser'
        , displayName: 'Facebook Comment Collapser'
        , links:  [
            { name: 'firefox', link: 'https://addons.mozilla.org/en-us/firefox/addon/commentcollapser/' }
          , { name: 'chrome', link: 'https://chrome.google.com/webstore/detail/comment-collapser/glckkkgoiekmhgdkcogfmbecdkbnangb?hl=en' }
          ]
        },

        {
          repoName: 'UvSquares'
        , displayName: 'Blender UV Squares'
        , links:  [
            { name: 'CGCookie', link: 'https://cgcookiemarkets.com/all-products/uv-squares/' }
          ]
        },

        {
          repoName: 'Edger'
        , displayName: 'Blender Edger'
        , links:  [
            { name: 'BlenderArtists', link: 'http://blenderartists.org/forum/showthread.php?358615'}
          ]
        },

        {
          pathName: 'unity-gui-node-editor'
        , displayName: 'GUI Node Editor'
        , links:  [
            { name: 'WebGL Demo', link: 'https://radivarig.github.io/GUINodeEditorWebGLDemo/' },
            { name: 'Documentation', link: 'https://github.com/Radivarig/GUI-Node-Editor_docs-and-issue-tracker' },
          ]
        },

        {
          pathName: 'unity3d-projects'
        , displayName: 'Other Unity3d Projects'
        }

      ]
    }
  }

  componentDidMount = () => {
    document.body.style.backgroundColor = 'rgb(210, 212, 214)'
  }

  render = () => {

//    var tabStyle = {}
    var urlHash = location.href.split('#')[1]
    var activeTab = -1
    var Tabs = this.state.tabs.map((x, i) => {
      var isActive = false
      if (urlHash == '/' +(x.pathName || x.repoName)) {
        activeTab = i
        isActive = true
      }
      var handleClick = () => {}
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
    var links = displayTab.links ? displayTab.links.map((x, i) => {
      return (
        <span key={i}>
          { i !== 0 ? ', ' : '' } 
          <a href={x.link}>{x.name}</a>
        </span>
      )
    }) : ''

    if (displayTab.repoName === '')
      return <div/>

    var showRibbon =
          (displayTab.repoName && displayTab.repoName !== '') ||
          (activeTab === -1)

    return (
      <div>
        {
          ! showRibbon ? '' : 
          <GithubRibbon gitHref={'Radivarig/' +(displayTab.repoName)} />
        }

        <div style={{textAlign: 'center'}}>

          <div>{Tabs}</div>
          <hr/>
          <div style={{height: '1em'}}>
            <TwitterFollowButton user='Radivarig' showCount={true} />
          </div>
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

        {this.props.children}

        <StatCounter />
      </div>
    )
  }
})

var MyLink extends React.Component {
  mixins: [ History ]

  handleClick = () => {
    //this.history.pushState(null, `/users/${user.id}`, query);
    this.history.replaceState(null, `/${this.props.name}`)
  }

  render = () => {
    return (
      <button disabled={this.props.isActive}
              onClick={this.handleClick}
              >
        {this.props.children}
      </button>
    )
  }
}

var Unity3dProjectsViewer extends React.Component {
  render = () => {
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
}

class NotFoundViewer extends React.Component {
  render = () => {
    return (
      <div style={{textAlign: 'center'}}>
      <span style={{fontSize: '260px'}}>4</span>
      <img style={{width: 200, height: 200}} src='http://i.imgur.com/0opRxl2.gif' />
      <span style={{fontSize: '260px'}}>4</span>
      </div>
    )
  }
}

const ProfileViewer extends React.Component {
  render = () => {
    return (
      <div style={{textAlign: 'center'}}>
        <img style={{width: 200, height: 200}} src='https://avatars0.githubusercontent.com/u/6281737?v=3&s=460' />
      </div>
    )
  }
}

class UnityGuiNodeEditorViewer extends React.Component {
  render = () => {
    return (
      <div style={{margin: 'auto'}}>
        <iframe style={{display: 'block', margin: 'auto'}}
          src='https://radivarig.github.io/GUINodeEditorWebGLDemo/'
          width={1200}
          height={800}
        >
        </iframe>
      </div>
    )
  }
}

class StatCounter extends React.Component {
  componentDidMount = () => {
    window.sc_project=10672857
    window.sc_invisible=0
    window.sc_security="f4016a86"
    window.scJsHost = (("https:" == document.location.protocol) ?
      "https://secure." : "http://www.")
    document.write("<sc"+"ript type='text/javascript' src='" +
    scJsHost +"statcounter.com/counter/counter.js'></"+"script>")
  }

  render = () => {

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
}



// === Youtube Viewers
const CommentCollapserViewer = <SimpleYoutube url={'https://www.youtube.com/watch?v=bAex9ILC3uo'} />
const UvSquaresViewer = <SimpleYoutube url={'https://www.youtube.com/watch?v=VYZnGIql2UI'} />
const EdgerViewer = <SimpleYoutube url={'https://www.youtube.com/watch?v=ToHbROhUrEc'} />


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProfileViewer} />
    <Route path="/unity-gui-node-editor" component={UnityGuiNodeEditorViewer} />
    <Route path="/react-drag-range" component={DragRangeViewer} />
    <Route path="/react-speed-reader" component={SpeedReaderViewer} />
    <Route path="/react-popups" component={PopupsViewer} />
    <Route path="/react-infinite-any-height" component={AnyHeightViewer} />
    <Route path="/CommentCollapser" component={CommentCollapserViewer} />
    <Route path="/UvSquares" component={UvSquaresViewer} />
    <Route path="/Edger" component={EdgerViewer} />
    <Route path="/unity3d-projects" component={Unity3dProjectsViewer} />
    <Route path='/*' component={NotFoundViewer} />
  </Route>
)
