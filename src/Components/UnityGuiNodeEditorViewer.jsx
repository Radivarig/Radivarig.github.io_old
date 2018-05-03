import React from "react"

export default class UnityGuiNodeEditorViewer extends React.Component {
  state = {
    "width": undefined,
  }

  componentDidMount () {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState ({
      "width": this.element.getBoundingClientRect ().width,
    })
  }

  getDimensions = () => {
    if (this.state.width === undefined) {
      return {
        "width": "100%",
        "height": "100%",
        "scale": 1,
      }
    }

    const webGLWidth = 960
    const webGLHeight = 645

    const width = this.state.width
    const scale = width / webGLWidth
    const height = webGLHeight * scale

    return {
      width,
      height,
      scale,
    }
  }

  render = () => {
    const { width, height, scale } = this.getDimensions ()
    console.log ("render", { width, height, scale })

    const style = {
      "display": "block",
      "margin": "auto",
      "transform": `scale(${scale})`,
      "transformOrigin": "top left",
      "width": typeof width === "number" ? width / scale : width,
      "height": typeof height === "number" ? height / scale : height,
    }

    return (
      <div style={{ "margin": "auto", width, height, "transform": `scale${scale}` }}>
        <iframe
          ref={(ref) => {console.log ("setting ref", { ref }); this.element = ref}}
          style={style}
          src='https://radivarig.github.io/GUINodeEditorWebGLDemo/'
        />
      </div>
    )
  }
}
