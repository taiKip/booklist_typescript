
import './App.css';
import NavBar from './components/NavBar/NavBar';
import BookList from './components/BookList/BookList';
import NewBookForm from './components/NewBookForm/NewBookForm';
import { BookContextProvider } from './contexts/BookContextProvider'
function App() {
  return (
    <BookContextProvider>
      <div className="App">
       <NavBar />
        <BookList />
        <NewBookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
