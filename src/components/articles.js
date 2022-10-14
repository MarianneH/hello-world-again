function Article({ name, img }) {
  return (
    <article>
      <h3>{name}</h3>
      <img class="articleImage" src={img} />
    </article>
  );
}
export default Article;
