import React from 'react'
import BlogCard from '../../components/blogs/BlogCard'
import "../../General.css"

function Blogs() {
  return (
    <div className='bodyBlogs'>
        <div className='blogColumnDetail'></div>
        <BlogCard/>
        <div className='blogColumnDetail'></div>
    </div>
  )
}

export default Blogs