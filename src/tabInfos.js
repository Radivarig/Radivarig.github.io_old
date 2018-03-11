import React from "react"

import DragRangeViewer from "../node_modules/react-drag-range/src/Viewer.jsx"
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
  links: Array<{name: string, url: string}>,
  component: Function,
}

const TabInfos: Array<TabInfo> = [
  {
    "route": "react-drag-range",
    "repo": "react-drag-range",
    "label": "React Drag Range",
    "component": DragRangeViewer,
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-drag-range" },
    ],
  },

  {
    "route": "react-speed-reader",
    "repo": "react-speed-reader",
    "label": "React Speed Reader",
    "component": SpeedReaderViewer,
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-speed-reader" },
    ],
  },

  {
    "route": "react-popups",
    "repo": "react-popups",
    "label": "React Popups",
    "component": PopupsViewer,
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-popups" },
    ],
  },

  {
    "route": "react-infinite-any-height",
    "repo": "react-infinite-any-height",
    "label": "React Infinite Any Height",
    "component": AnyHeightViewer,
    "links": [
      { "name": "npm", "url": "https://www.npmjs.com/package/react-infinite-any-height" },
    ],
  },

  {
    "route": "CommentCollapser",
    "repo": "CommentCollapser",
    "label": "Facebook Comment Collapser",
    "component": CommentCollapserViewer,
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
    "links": [
      { "name": "CGCookie", "url": "https://cgcookiemarkets.com/all-products/uv-squares/" },
    ],
  },

  {
    "route": "Edger",
    "repo": "Edger",
    "label": "Blender Edger",
    "component": EdgerViewer,
    "links": [
      { "name": "BlenderArtists", "url": "http://blenderartists.org/forum/showthread.php?358615" },
    ],
  },

  {
    "route": "unity-gui-node-editor",
    "repo": "",
    "label": "GUI Node Editor",
    "component": UnityGuiNodeEditorViewer,
    "links": [
      { "name": "WebGL Demo", "url": "https://radivarig.github.io/GUINodeEditorWebGLDemo/" },
      { "name": "Documentation", "url": "https://github.com/Radivarig/GUI-Node-Editor_docs-and-issue-tracker" },
    ],
  },

  {
    "route": "unity3d-projects",
    "repo": "/",
    "label": "Other Unity3d Projects",
    "component": Unity3dProjectsViewer,
    "links": [],
  },
]

export default TabInfos
