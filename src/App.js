import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Teaser from "./components/teaser";
import ContentComponent from "./components/aboutUs";
import Footer from "./components/footer";
import FeaturedPosts from "./components/featuredPosts";

const featuredPosts = [
  {
    name: "Places to go",
    img: "https://images.unsplash.com/photo-1432839318976-b5c5785ce43f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JleXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Things to see",
    img: "https://images.unsplash.com/photo-1508995561846-e758be1cf510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "Food to eat",
    img: "https://images.unsplash.com/photo-1577789140096-411a2f714caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JleXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Venues to visit",
    img: "https://images.unsplash.com/photo-1604917408752-0082992cac5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdyZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "lalalallala",
    img: "https://images.unsplash.com/photo-1612285602222-3e7965ae6e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const content = {
  headline: "About us",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab quo sapiente sint consequuntur possimus ipsum tempore consequatur quia! Ipsam, adipisci velit. Cum esse tenetur iste consectetur ipsum repellendus debitis? Modi hic laborum possimus fugiat totam. Laudantium itaque modi mollitia ut iste ducimus alias. Nostrum soluta excepturi aut quo magni maxime recusandae laboriosam, amet consectetur dignissimos aliquam ratione fuga praesentium. Asperiores rem aliquam vel voluptatibus ea sint dolorum necessitatibus tempore, soluta quam laborum mollitia porro tenetur commodi. Minima vero ducimus illum, obcaecati a libero voluptate numquam! Dolor consequuntur magni sint. Officiis totam optio rerum repudiandae, aliquid velit magni temporibus dolorem omnis, id alias ipsam laboriosam, expedita debitis eveniet rem perferendis provident. Nulla, minima vitae commodi explicabo et adipisci laboriosam officia? Veritatis recusandae neque accusantium, cupiditate cumque amet ducimus excepturi laboriosam possimus optio atque aliquid sapiente praesentium unde quam voluptates quod, modi ex numquam voluptas sunt? Autem minima consequatur natus enim.",
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <Teaser />
      <main>
        <ContentComponent headline={content.headline} text={content.text} />
        <FeaturedPosts featuredPosts={featuredPosts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
