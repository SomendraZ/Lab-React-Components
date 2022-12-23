import './App.css';

import GallaryFooter from './components/GallaryFooter';
import imageData from './components/image';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/> 

      <Body  img={imageData}/>

      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
