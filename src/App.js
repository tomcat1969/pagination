import axios from 'axios'
import {useState, useEffect} from 'react'
import './App.css';
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import Filter from './components/Filter'
import TestComponent from './components/TestComponent'
function App() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [postsPerPage,setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  },[])
  // console.log(posts)
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  //change postsPerPage
  const changePageSize = (size) => setPostsPerPage(size)
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <TestComponent/>
      <Filter changePageSize={changePageSize}/>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length}
        paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
