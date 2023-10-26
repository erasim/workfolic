/** @format */

import "./App.css";
import Slider from "./element/Slider";
import RightMain from "./element/RightMain";

function App() {
	return (
		<div className='App'>
			<div className='workfolic'>
				<div className='Main-left'>
					<Slider />
				</div>
				<div className='main-Right'>
					<RightMain />
				</div>
			</div>
		</div>
	);
}

export default App;
