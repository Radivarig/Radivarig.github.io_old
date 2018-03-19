import React from "react"
import { Button } from "material-ui"

export default (props) => {
  const { tab, imgFloatLeft } = props
  const links = tab.links.map ((l, i) =>
    <Button key={i}>
      <a target="__BLANK" href={l.url}>{l.name}</a>
    </Button>
  )

  return (
    <div style={{
      "textAlign": "center",
    }}
    >
      {
        tab.image ?
          <Button
            style={{ "float": imgFloatLeft ? "left" : "right" }}
            onClick={props.onClick}
          >
            <img
              style={{ "width": 160, "height": 100 }}
              src={tab.image}
            />
          </Button>
          : ""
      }
      <Button onClick={props.onClick}>
        {tab.label}
      </Button>
      {links}

      <div>
        {tab.description}
      </div>

      <div style={{ "clear": "both" }} />
    </div>
  )
}
