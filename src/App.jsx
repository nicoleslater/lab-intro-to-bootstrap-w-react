import postData from "./data/posts.json";
import Nav from "./components/Nav";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
    </main>
  );
}

export default App;
