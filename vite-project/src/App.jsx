import './App.css'
import {Routes, Route} from 'react-router-dom'
import About from "./components/About/About.jsx";
import PostList from "./components/PostList/PostList.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='about' element={<About/>}/>
              <Route path='posts' element={<PostList/>}/>
          </Route>

      </Routes>
    </>
  )
}

export default App
