import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostInfo from "./components/PostInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostListing from "./components/PostListing";
import LocationListing from "./components/LocationListing";

function App() {
 
  

  return (
    <main>

      <NavBar />
      <Header />
      <SearchBar />
      <PostListing postlisting={postData} />
      <LocationListing locationlisting={postData} />
      <Footer />
      <PostInfo />
    
    </main>
  );
}

export default App;
