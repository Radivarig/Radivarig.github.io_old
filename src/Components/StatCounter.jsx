import React from "react"

import "style-loader!css-loader!./StatCounter.css"

export default class StatCounter extends React.Component {
  componentDidMount = () => {
    window.sc_project = 10672857
    window.sc_invisible = 0
    window.sc_security = "f4016a86"
    window.scJsHost = ((document.location.protocol === "https:") ?
      "https://secure." : "http://www.")
    // eslint-disable-next-line
    document.write (`${"<sc" + "ript type='text/javascript' src='"}${window.scJsHost}statcounter.com/counter/counter.js'></` + "script>")
  }

  render = () => (
    <div className="statcounter">
      <a
        title="create counter"
        href="http://statcounter.com/free-hit-counter/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="statcounter"
          src="http://c.statcounter.com/10672857/0/f4016a86/0/"
          alt="create counter"
        />
      </a>
    </div>
  )
}
