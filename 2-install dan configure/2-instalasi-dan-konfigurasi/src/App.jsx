import { useState } from 'react';
import Header from './components/Header';

function App() {
  const students = ["Rahmat", "Septa", "Zakaria"];
  const [likes, setLikes] = useState(0);

  function handleState() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header />
      <button onClick={handleState}>Likes ({likes})</button>
    </>
  );
}

export default App
