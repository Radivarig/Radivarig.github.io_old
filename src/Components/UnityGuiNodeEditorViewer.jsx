import React from "react"

export default class UnityGuiNodeEditorViewer extends React.Component {
  render = () => (
    <div style={{ "margin": "auto" }}>
      <iframe
        style={{ "display": "block", "margin": "auto" }}
        src='https://radivarig.github.io/GUINodeEditorWebGLDemo/'
        width={1200}
        height={800}
      />
    </div>
  )
}
