// import React from "react"

const VideoCard = ({info}) => {

	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className="m-2 p-2 w-72 shadow-xl ">
			<img  className="h-40 w-full rounded-lg cursor-pointer" alt="thumbnail" src={thumbnails.medium.url} />
			<ul className="mt-2 space-y-2">
				<li className="font-bold cursor-pointer">{title}</li>
				<li>{channelTitle}</li>
				<li>{statistics.viewCount} views</li>
			</ul>
		</div>
	)
}

export default VideoCard