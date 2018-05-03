import React from "react"
import dimensions from "react-dimensions"

class UnityGuiNodeEditorViewer extends React.Component {
  getDimensions = () => {
    if (this.props.containerWidth === undefined) {
      return {
        "width": "100%",
        "height": "100%",
        "scale": 1,
      }
    }

    const webGLWidth = 960
    const webGLHeight = 645

    const width = this.props.containerWidth
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
          ref={(ref) => {this.element = ref}}
          style={style}
          src='https://radivarig.github.io/GUINodeEditorWebGLDemo/'
        />
      </div>
    )
  }
}

export default dimensions () (UnityGuiNodeEditorViewer)
