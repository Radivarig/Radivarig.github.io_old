import React from "react"

export default class Unity3dProjectsViewer extends React.Component {
  render = () => (
    <div style={{ "textAlign": "center" }}>

      <ul style={{ "margin": "auto", "width": "60%", "textAlign": "left" }}>

        <li>
          <a href='https://github.com/Unity3D-Wine-Support/Unity3D-on-Wine/blob/master/text-editors-MonoDevelop/unity3d_native_monodevelop.sh'>
            External editor </a>
            bash script for bypassing MonoDevelop path issues when opening files in Unity3d running over Wine on Linux.
        </li>

        <li>
          <a href='https://github.com/Radivarig/ZileKiticMile/blob/master/ZilaGUI.cs'>
            Veiner</a>
            , image marking application for Faculty of Medicine student used for automatization of tracking and comparing veins, made in Unity3d.
        </li>

        <li>
          <a href='https://github.com/Radivarig/ProceduralMeshColliders/blob/master/Assets/Abiogenesis3d/Procedural%20Mesh%20Colliders/ProceduralMesh.cs'>
            Procedural Mesh Collider </a>
            generator asset for Unity3d.
        </li>

        <li>
          <a href='https://github.com/Radivarig/AssetHandler/tree/master/Assets'>
            Asset Handler</a>
            , tool for handling .asset files using UnityEditor namespace.
        </li>

      </ul>

    </div>
  )
}
