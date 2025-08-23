import React from 'react'

const VideoCardShimmer = () => {
  return (
    <div className="m-2 p-2 w-72 shadow-xl animate-pulse">
      <div className="bg-gray-300 h-40 w-full rounded-lg"></div>
      <ul className="mt-2 space-y-2">
        <li className="bg-gray-300 h-4 w-3/4 rounded"></li>
        <li className="bg-gray-300 h-4 w-1/2 rounded"></li>
        <li className="bg-gray-300 h-4 w-1/3 rounded"></li>
      </ul>
    </div>
  )
}

export default VideoCardShimmer