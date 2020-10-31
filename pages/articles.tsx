import { GetStaticProps } from "next";
import { fetchPosts, Posts_posts as Posts } from "../wpapi";
import { ArticlesView } from "../perPageComponenta/Articles/View";

interface Props {
  posts: Posts;
}

export default function Articles({ posts }: Props) {
  const allPosts = [...posts?.nodes];
  const firstPost = allPosts.shift();

  console.log(allPosts);

  return <ArticlesView firstPost={firstPost} restPosts={allPosts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const [
    {
      data: {
        data: { posts },
      },
    },
  ] = [await fetchPosts({ variables: { first: 10 } })];

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};

{
  /* <main>
{posts.nodes.map(({ id, title, slug }) => (
  <div key={id}>
    <Link href={`/article/${slug}`}>
      <a>{title}</a>
    </Link>
  </div>
))}
</main> */
}
