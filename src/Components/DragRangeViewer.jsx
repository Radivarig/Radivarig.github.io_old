import React from "react"

const examples = {}
const importAll = (r) => r.keys ().forEach ((key) => {examples[key] = r (key).default})
importAll (require.context ("../../node_modules/react-drag-range/src/Examples/"))
console.log (examples)

const modules = 4
const styles = {
  "row": {
    "backgroundColor": "#eee",
    "margin": 10,
    "padding": 20,
    "boxShadow": "inset 0 0 10px #345",
  },
}

export default () => (
  <div>
    {
      Object.keys (examples).map ((filename, i) => {
        const Component = examples[filename]
        console.log (filename, Component)
        return <div key={i} style={styles.row}><Component /></div>
      })
    }
  </div>
)
