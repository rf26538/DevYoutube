import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard"
import VideoCardShimmer from "./VideoCardShimmer";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect( () => {
		fetchVideos();
	}, [])

	const fetchVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API);
		const json = await data.json();
		setVideos(json.items)
	} 

	if (videos.length === 0) {
		return (
			<div className="flex flex-wrap">
				{Array(10).fill("").map((_, i) => (
				<VideoCardShimmer key={i} />
				))}
			</div>
		);
	}

	return (
		<div className="flex flex-wrap">
			{videos.map((video, index) =>( 
				<Link key={video.id + index} to={"/watch?v=" + video.id}>
					<VideoCard key={video.id} info={video}/>
				</Link>
			))}
		</div>	
	)
}

export default VideoContainer