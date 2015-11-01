var React = require('react')
var YouTube = require('react-youtube')

var SimpleYoutube = React.createClass({
  render: function() {
    var opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return (
      <div style={{textAlign: 'center'}}>
        <YouTube
          url={this.props.url}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }
})

module.exports = SimpleYoutube
