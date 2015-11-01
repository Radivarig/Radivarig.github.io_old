var React = require('react')

var TwitterFollowButton = React.createClass({
  componentDidMount: function() {
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs')
  }
, render: function() {
    return (  
      <a href={"https://twitter.com/" +this.props.user}
          className="twitter-follow-button"
          data-show-count={this.props.showCount}
          >
        Follow @{this.props.user}
      </a>
    )
  }
})

module.exports = TwitterFollowButton