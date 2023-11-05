"use client"

import { usePostsStore } from "@/store/Posts"

const Posts = () => {
   const { posts } = usePostsStore() // make sure to destructure this when grabbing it, since its an array

   return (
      <>
         <div>{posts.length}</div>
      </>
   )
}

export default Posts
