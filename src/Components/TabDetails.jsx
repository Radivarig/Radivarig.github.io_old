import React from "react"
import { Button } from "material-ui"

export default (props) => {
  const { tab, imgFloatLeft } = props
  const links = tab.links.map ((l, i) =>
    <span key={i}>
      { i !== 0 ? ", " : "" }
      <a href={l.url}>{l.name}</a>
    </span>
  )

  return (
    <div style={{
      "textAlign": "center",
    }}
    >
      <Button style={{ "float": imgFloatLeft ? "left" : "right" }}>
        {
          tab.image ?
            <img
              style={{ "width": 160, "height": 100 }}
              src={tab.image}
            />
            : ""
        }
      </Button>
      <Button>
        {tab.label}
      </Button>
      <div>
        {tab.description}
      </div>

      <div style={{ "clear": "both" }} />
    </div>
  )
}
