import { create } from "zustand"

// This creates a store using Zustand.
// It exports a hook named usePostsStore that can be used to access the state and actions.

export const usePostsStore = create((set) => ({
   // The argument to create is a function that receives a set function as a parameter.
   // This set function is used to update the state.
   // first we need to create an inital state (just like redux or context)
   posts: [
      {
         id: 1,
         title: "Post 1",
         description: "Description teste 123",
      },
      {
         id: 2,
         title: "Post 2",
         description: "Description teste1234",
      },
   ],

   // addPost is a function that takes a newPost as an argument.
   // It updates the state by adding the new post to the existing posts.
   addPost: (newPost) => {
      set((state) => {
         return { posts: [...state.posts, newPost] }
      })
   },
   editPost: (id, updatePost) => {
      set((state) => {
         const updatedPosts = state.posts.map((post) => {
            if (post.id === id) {
               return { ...post, ...updatePost }
            }
            return post
         })
         return { posts: updatedPosts }
      })
   },
   deletePost: (id) => {
      set((state) => {
         const updatedPosts = state.posts.filer((post) => post.id !== id)
         return { posts: [updatedPosts] }
      })
   },
}))

// In summary, this code sets up a store for managing posts with an
// initial state and an addPost function to add new posts to the state.
