import React from "react"

export default (props) => {
  const src =
    `${"https://ghbtns.com/github-btn.html?"
    + "user="}${props.user
    }&repo=${props.repo
    }&type=${props.type
    }&count=${props.showCount}`

  return (
    <iframe
      src={src}
      frameBorder={0} width={100} height={20}
    />
  )
}
