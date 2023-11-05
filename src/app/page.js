import Posts from "@/components/posts/posts"
import styles from "./page.module.css"
import PostsCount from "@/components/postsCount/postCount"

export default function Home() {
   return (
      <main className={styles.main}>
         <Posts />
         <PostsCount />
      </main>
   )
}
