import React from "react"

import DragRangeViewer from "./Components/DragRangeViewer.jsx" // "../node_modules/react-drag-range/src/Viewer.jsx"
import SpeedReaderViewer from "../node_modules/react-speed-reader/src/Viewer.jsx"
import PopupsViewer from "../node_modules/react-popups/src/Viewer.jsx"
import AnyHeightViewer from "../node_modules/react-infinite-any-height/src/Viewer.jsx"

import Unity3dProjectsViewer from "./Components/Unity3dProjectsViewer.jsx"
import UnityGuiNodeEditorViewer from "./Components/UnityGuiNodeEditorViewer.jsx"

import SimpleYoutube from "./Components/SimpleYoutube.jsx"

// === Youtube Viewers
const CommentCollapserViewer = () => <SimpleYoutube videoId={"bAex9ILC3uo"} />
const UvSquaresViewer = () => <SimpleYoutube videoId={"VYZnGIql2UI"} />
const EdgerViewer = () => <SimpleYoutube videoId={"ToHbROhUrEc"} />

type TabInfo = {
  route: string,
  repo: string,
  label: string,
  component: Function,
  image: string,
  description: string,
  links: Array<{name: string, url: string}>,
}

const TabInfos: Array<TabInfo> = [
  {
    "route": "react-drag-range",
    "repo": "react-drag-range",
    "label": "React Drag Range",
    "component": DragRangeViewer,
    "image": "",
    "description": "React wrapper component for an element you want to interact with by dragging or clicking. \
    It will callback with percent where you clicked it or how much you've dragged. \
    Useful for creating sliders, or sliderless changing of numbers or enums.",
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-drag-range" },
    ],
  },

  {
    "route": "react-speed-reader",
    "repo": "react-speed-reader",
    "label": "React Speed Reader",
    "component": SpeedReaderViewer,
    "image": "http://i.imgur.com/M8Aw9Gh.gif",
    "description": "React speed reading engine you can make your speed reader with. \
    It can detect letter of focus, show multiple words at the same time, and adjust reading speed.",
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-speed-reader" },
    ],
  },

  {
    "route": "react-popups",
    "repo": "react-popups",
    "label": "React Popups",
    "component": PopupsViewer,
    "image": "http://i.imgur.com/VuwWFn2.gif",
    "description": "React component that spawns custom React elements at mouse position on given events. \
    Allows stacking up popups and closing all front popups when one is clicked or all if background is clicked. \
    It can detect screen quadrant and translate the popup so that it has enough space for popup content.",
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-popups" },
    ],
  },

  {
    "route": "react-infinite-any-height",
    "repo": "react-infinite-any-height",
    "label": "React Infinite Any Height",
    "component": AnyHeightViewer,
    "image": "",
    "description": "React wrapper component for react-infinite which adds automatic height detection of infinite list elements.",
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-infinite-any-height" },
    ],
  },

  {
    "route": "CommentCollapser",
    "repo": "CommentCollapser",
    "label": "Facebook Comment Collapser",
    "component": CommentCollapserViewer,
    "image": "https://media.giphy.com/media/fnQgMe1Mqm0qRzSyae/giphy.gif",
    "description": "Browser add-on that selects comments containing other tagged users and squashes their height to few pixels, \
    making the browsing of Facebook less cluttered. On squashed comment hover, it uncollapses and is shown in full height. \
    On add-on icon click, all collapsed comments are removed from DOM.",
    "links": [
      { "name": "firefox", "url": "https://addons.mozilla.org/en-us/firefox/addon/commentcollapser/" },
      { "name": "chrome", "url": "https://chrome.google.com/webstore/detail/comment-collapser/glckkkgoiekmhgdkcogfmbecdkbnangb?hl=en" },
    ],
  },

  {
    "route": "UvSquares",
    "repo": "UvSquares",
    "label": "Blender UV Squares",
    "component": UvSquaresViewer,
    "image": "https://media.giphy.com/media/Rd6sPB8DGiKZhdMRNQ/giphy.gif",
    "description": "Blender add-on that simplifies the process of stretching UVs to grid, using follow active quad face or stretching a line. \
    Useful for already unwrapped geometry that needs to fit over a straight texture.",
    "links": [
      { "name": "CG Cookie Markets", "url": "https://cgcookiemarkets.com/all-products/uv-squares/" },
    ],
  },

  {
    "route": "Edger",
    "repo": "Edger",
    "label": "Blender Edger",
    "component": EdgerViewer,
    "image": "https://media.giphy.com/media/bFgqKXm10QfZrqPaaK/giphy.gif",
    "description": "Blender add-on that fixates selected vertices to edges they sit on so that moving the edge also moves those vertices. \
    Useful for adjusting the edgeloops for subdivide modifier. It can also generate a mesh without addded edgeloops.",
    "links": [
      { "name": "BlenderArtists", "url": "http://blenderartists.org/forum/showthread.php?358615" },
    ],
  },

  {
    "route": "unity-gui-node-editor",
    "repo": "",
    "label": "GUI Node Editor",
    "component": UnityGuiNodeEditorViewer,
    "image": "",
    "description": "Unity add-on that provides the skeleton for a custom node editor logic. \
    It uses Unity GUI and is not bound to the editor meaning it can be exported in builds including WebGL.",
    "links": [
      { "name": "WebGL Demo", "url": "https://radivarig.github.io/GUINodeEditorWebGLDemo/" },
      { "name": "Documentation", "url": "https://github.com/Radivarig/GUI-Node-Editor_docs-and-issue-tracker" },
      { "name": "Asset Store", "url": "https://www.assetstore.unity3d.com/#!/content/84160" },
    ],
  },

  {
    "route": "unity3d-projects",
    "repo": "/",
    "label": "Other Unity3d Projects",
    "component": Unity3dProjectsViewer,
    "image": "",
    "description": "",
    "links": [],
  },
]

export default TabInfos
