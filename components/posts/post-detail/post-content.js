import ReactMarkdown from "react-markdown"

import classes from "./post-content.module.css"
import PostHeader from "./post-header"

const Dummy_Post = {
  slug: "getting-started-with-nextjs",
  title: "Geting started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
}

function PostContent() {
  const imagePath = `/images/posts/${Dummy_Post.slug}/${Dummy_Post.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={Dummy_Post.title} image={imagePath} />

      <ReactMarkdown>{Dummy_Post.content}</ReactMarkdown>
    </article>
  )
}
export default PostContent
