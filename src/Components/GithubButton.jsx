var React = require('react')

var GithubButton = React.createClass({
  render: function() {
    var src =
      'https://ghbtns.com/github-btn.html?'
    + 'user=' +this.props.user
    + '&repo=' +this.props.repo
    + '&type=' +this.props.type
    + '&count=' +this.props.showCount

    return (
      <iframe src={src}
              frameBorder={0} width={100} height={20}
              />
    )
  }  
})

module.exports = GithubButton
