// import React from "react"

import Button from "./Button"

const Lists = ["All", "Shorts", "Videos", "Ufc","News", "Albums", "Cokking","Soccer", "Unwatched", "Recently uploaded", "live", "Songs", "Under 4-min", "4-20 min", "Over 20 min"];

const ButtonList = () => {
  return (
    <div className="flex">
		{ Lists.map((list, index) => <Button key={"video007"+index} name={list} />) }
    </div>
  )
}

export default ButtonList;