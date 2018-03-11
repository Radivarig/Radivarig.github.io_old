import React from "react"

export default class TwitterFollowButton extends React.Component {
  componentDidMount = () => {
    //eslint-disable-next-line
    !function (d,s,id) {let js,fjs = d.getElementsByTagName (s)[0], p = (/^http:/).test (d.location) ? "http" : "https";if(!d.getElementById (id)) {js = d.createElement (s);js.id = id;js.src = `${p}://platform.twitter.com/widgets.js`;fjs.parentNode.insertBefore (js,fjs)}} (document, "script", "twitter-wjs")
  }

  render = () => (
    <a
      href={`https://twitter.com/${this.props.user}`}
      className="twitter-follow-button"
      data-show-count={this.props.showCount}
    >
        Follow @{this.props.user}
    </a>
  )
}
