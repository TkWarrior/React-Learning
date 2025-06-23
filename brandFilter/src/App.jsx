import { useState } from 'react'

import './App.css'

const allBrands = [
  { id: "1", name: "puma" },
  { id: "2", name: "sparks" },
  { id: "3", name: "nike" },
  { id: "4", name: "loffers" }
];
function App() {
  const [brands , setBrands] = useState(allBrands)
  const [selectedBrand , setSelectedBrand] = useState([]);
  const onSearchChange = (e) =>{
      const search = e.target.value;
      const filteredBrands = search.length>0 ? brands.filter((brand) => {return brand.name.includes(search?.toLowerCase())}):allBrands;
      setBrands(filteredBrands);
      console.log(filteredBrands);
  }
  
  const onBrandClick = (id) => {
      const selectedItem =  allBrands.find(item => item.id === id);
      setSelectedBrand([...selectedBrand , selectedItem]);
  }
  return (
     
    <div >
      <div>
        <label> Input Field </label>
        <input placeholder="Search" onChange={onSearchChange} />
      </div>
      <div >
        <p>All Brands</p>
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>{brand.name} <button onClick={() => onBrandClick(brand.id)}>Add to Cart</button></li>
          ))}
        </ul>
        <p>Your cart</p>
        <ul>
          {
            selectedBrand.map((brand) => (<li key={brand.id}> {brand.name}</li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default App
