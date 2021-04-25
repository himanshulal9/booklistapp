import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className='app'>
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
