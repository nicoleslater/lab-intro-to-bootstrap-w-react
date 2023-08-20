import postData from "./data/posts.json";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import ListGroup from "./components/ListGroup";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
      <PostListing />
      <SearchBar />
      <ListGroup />
      <Footer />
      <Header />
    </main>
  );
}

export default App;
