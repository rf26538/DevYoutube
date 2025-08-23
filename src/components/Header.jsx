// import React from "react"

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice"

const Header = () => {
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

      <div className="flex-[2] flex justify-center">
			<div className="flex w-full max-w-xl">
				<input
					className="flex-grow border border-gray-400 p-2 rounded-l-full"
					type="text"
				/>
				<button className="border border-gray-400 p-2 rounded-r-full">
					🔍
				</button>
			</div>
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
