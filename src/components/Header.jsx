import React, { useEffect, useState }from "react"

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice"
import { YOUTUBE_SEARCH_API } from "../utils/constants"

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);
	
	useEffect(() => {

		const getSearchSuggestions = async () => {
			const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
			const json = await data.json();

			setSuggestions(json[1]);
		} 

		const timer = setTimeout(() => {
			getSearchSuggestions();
		}, 200)

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	
	const dispatch = useDispatch();

	const  toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}

  return (
    <div className="flex items-center justify-between w-full p-4 shadow-lg">

		<div className="flex-[2] flex justify-start">
			<div className="flex">
			<img
				onClick={() => toggleMenuHandler()}
				className="h-14 cursor-pointer"
				alt="hamburger-menu"
				src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
			/>
			<img
				className="h-14"
				alt="youtube-logo"
				src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
			/>
			</div>
		</div>

		<div className="flex-[2] flex justify-center relative">
			<div className="flex w-full max-w-xl">
			<input
				className="flex-grow border border-gray-400 p-2 rounded-l-full"
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onFocus={() => setShowSuggestions(true)}
				onBlur={() => setShowSuggestions(false)}
			/>
			<button className="border border-gray-400 p-2 rounded-r-full">
				🔍
			</button>
			</div>

			{showSuggestions && (
			<div className="absolute top-full mt-1 w-full max-w-xl bg-white border border-gray-300 shadow-lg rounded-lg z-10">
				<ul>
					{suggestions.map((suggestion) => 
						<li key={suggestion} className="p-2 hover:bg-gray-100 cursor-pointer">🔍 {suggestion}</li>
					)}
				</ul>
			</div>
			)}
		</div>

		<div className="flex-[2] flex justify-end mx-4">
			<img
			className="h-14"
			alt="user"
			src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
			/>
		</div>
	</div>

  );
}

export default Header
