
import BlogList from "../components/BlogList"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <BlogList/>
    </div>
  )
}

export default Home