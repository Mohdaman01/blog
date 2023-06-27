import {Routes , Route} from 'react-router-dom';
import {Home, PostDetails, Navbar, CreatePost} from './index';
import '../assets/app.css';

function App() {
  return (
    <div className="container">
        <Navbar/>
       <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route exact path='/create-post' element={<CreatePost/>} />
        <Route exact path ='/post/:postId' element={<PostDetails/>}/> 
       </Routes>
    </div>
  );
}

export default App;
