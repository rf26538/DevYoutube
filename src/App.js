import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

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
		{
			path : "demo",
			element : <Demo />
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
