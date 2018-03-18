import React from "react"
import YouTube from "react-youtube"

export default class SimpleYoutube extends React.Component {
  render = () => {
    const opts = {
      "width": "100%",
      "playerVars": { // https://developers.google.com/youtube/player_parameters
        "autoplay": 1,
      },
    }

    return (
      <div style={{ "textAlign": "center" }}>
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    )
  }
}
