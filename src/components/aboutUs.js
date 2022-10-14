function ContentComponent({ headline, text }) {
  return (
    <section id="aboutus">
      <h2>{headline}</h2>
      <p class="text-content">{text}</p>
    </section>
  );
}
export default ContentComponent;
