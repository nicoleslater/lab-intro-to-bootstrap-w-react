import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ListGroup from "./components/ListGroup";
import PostListing from "./components/PostListing";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  console.log(postData);
  console.log(postData.title);
  return (
    <main>

      <NavBar />
      <PostListing />
      <SearchBar />
      <ListGroup />
      <Footer />
      <Header />
    </main>
  );
}

export default App;
