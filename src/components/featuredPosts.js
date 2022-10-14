import Article from "./articles";

function FeaturedPosts({ featuredPosts }) {
  console.log(featuredPosts);
  return (
    <section>
      <h2>Featured posts</h2>
      <div class="articles">
        {featuredPosts.map((post, index) => (
          <Article key={index} {...post} />
        ))}
      </div>
    </section>
  );
}
export default FeaturedPosts;
