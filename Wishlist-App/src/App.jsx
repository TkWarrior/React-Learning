
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css'

function App() {
  const [towish , setTowish] = useState();
  const [wishlist, setTowishlist] = useState([]);
  
  const onSearchChange = (e) =>{
    setTowish(e.target.value);
  }
  const onWishClick = () =>{
      const updatedWishList = [...wishlist,{id:uuid() , towish:towish , isChecked:false}];
      console.log(updatedWishList)
      setTowishlist(updatedWishList);
      setTowish('')
  }

  const onDeleteClick = (id) =>{
    console.log("clicked",id);
    const filterWishlist = wishlist.filter((towish) => towish.id !==id )
    setTowishlist(filterWishlist);
  }

  const onCheck = (id) =>{
    const updatedWishList = wishlist.map((towish) => towish.id ===id ? {...towish , isChecked:!towish.isChecked}:towish);
    console.log(updatedWishList)
    setTowishlist(updatedWishList);
  }
  return (
    <>
      <h1>My Wishlist</h1>
      {/*below is controlled input which value can be controlled*/}
      <div>
        <input value={towish} onChange={onSearchChange} />
        <button onClick={onWishClick}>Add to Wishlist</button>
      </div>

      {wishlist?.length > 0 &&
        wishlist.map((towish) => (
          <li key={towish.id}>
            <input type="checkbox" onChange={() => onCheck(towish.id)} />
            <span className={towish.isChecked ? "strike-through" : ""}>
              {towish.towish}
            </span>

            <button onClick={() => onDeleteClick(towish.id)}>Delete</button>
          </li>
        ))}
    </>
  );
}

export default App
