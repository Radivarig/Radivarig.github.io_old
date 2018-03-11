import React from "react"

import GithubRibbon from "./GithubRibbon.jsx"
import GithubButton from "./GithubButton.jsx"

export default (props) => {
  const { tab } = props
  const links = tab.links.map ((l, i) =>
    <span key={i}>
      { i !== 0 ? ", " : "" }
      <a href={l.url}>{l.name}</a>
    </span>
  )

  return (
    <div>
      <h3>
        {tab.label}
        <span style={{ "position": "absolute", "transform": "translate(75%)" }}>
          <GithubButton
            user='Radivarig'
            repo={tab.repo}
            key={tab.label}
            type={"star"}
            showCount={true}
          />
        </span>
      </h3>

      {links.length ? <span>More info: {links}</span> : ""}
      {tab.repo ? <GithubRibbon gitHref={`Radivarig/${tab.repo}`} /> : ""}

    </div>
  )
}
