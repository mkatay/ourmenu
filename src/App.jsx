import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Menus } from './components/Menus';
import { StickyHeader } from './components/StickyHeader';

function App() {
  const [selectedCateg, setSelectedCateg] = useState('all');

  return (
    <div className="container shadow">
      <StickyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg} />
      <Menus selectedCateg={selectedCateg} />
    </div>
  );
}

export default App;
