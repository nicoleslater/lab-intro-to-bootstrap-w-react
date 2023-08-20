import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ListGroup from "./components/ListGroup";
import PostInfo from "./components/PostInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostListing from "./components/PostListing";
import PostCard from "./components/PostCard";

function App() {
  console.log(postData[0]);
  

  return (
    <main>

      <NavBar />
      <PostCard />
      <PostListing />
      <SearchBar />
      <ListGroup />
      <Footer />
      <Header />
      <PostInfo />
    </main>
  );
}

export default App;
