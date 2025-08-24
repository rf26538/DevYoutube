import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
    path : "/",
	element : (
		<>
			<Header />
			<Body />
		</>
	),
	children : [
		{
			path : "/",
			element : <MainContainer />
		},
		{
			path : "watch",
			element : <WatchPage />
		},
	]
}])

function App() {
  return (
	<div >
		<RouterProvider router={appRouter}/> 
	</div>
  );
}

export default App;
