import AllPosts from "../../components/posts/all-posts"

const Dummy_Posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Geting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production. It makes building fullstack React sites or apps a breeze and ships with built in Server Side Rendering (SSR) ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Geting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production. It makes building fullstack React sites or apps a breeze and ships with built in Server Side Rendering (SSR) ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Geting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production. It makes building fullstack React sites or apps a breeze and ships with built in Server Side Rendering (SSR) ",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Geting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is the React framework for production. It makes building fullstack React sites or apps a breeze and ships with built in Server Side Rendering (SSR) ",
    date: "2022-02-10",
  },
]

function AllPostsPage() {
  return <AllPosts posts={Dummy_Posts} />
}

export default AllPostsPage
