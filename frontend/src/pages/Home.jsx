import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FoodItem from "../components/FoodItem";
import Footer from "../components/Footer";
import axios from "axios";
import { Button, InputGroup ,Form} from "react-bootstrap";

const Home = () => {
  const [foodList, setFoodList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm,setSearchTerm] = useState("")

  useEffect(() => {
    axios
      .get("https://fooddeliveryapplicationnew.onrender.com/api/foods/")
      .then((res) => setFoodList(res.data))
      .catch((err) => console.error(err));
  }, []);

  const categories = [
    {name:"All",image:"https://cdn-icons-gif.flaticon.com/15578/15578744.gif"},
    {name:"Breakfast",image:"https://cdn-icons-gif.flaticon.com/8761/8761687.gif"},
    {name:"Lunch",image:"https://cdn-icons-gif.flaticon.com/11933/11933459.gif"},
    {name:"Dinner",image:"https://cdn-icons-gif.flaticon.com/19001/19001030.gif"},
  ];

  const filteredFoodList = foodList.filter((item)=>{
    
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const searcMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase())

    return categoryMatch && searcMatch

  })

    
     

  return (
    <div>
      <Banner />

      <div className="container my-5">
        <h2 className="text-center mb-4">🍽 Popular Dishes</h2>

        {/* Category Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
         {categories.map((cat)=>(
             <div
             key={cat.name}
             className={`text-center p-2 rounded-circle border ${
              selectedCategory === cat.name ? "bg-danger text-white" :"bg-white"
             }`}
             style={{
              width:"100px",
              height:"100px",
              cursor:"pointer",
              boxShadow: selectedCategory === cat.name ? "0 0 5px #007bff" : "none",
              border:"2px solid #dee2e6",
              transition: "all 0.3s ease-in-out",
             }}
             onClick={()=>setSelectedCategory(cat.name)}
             >
             <img src= {cat.image} 
             alt={cat.name}
             style={{
              width:"100%",
              height:"100%",
              borderRadius:"50%",
              objectFit:"cover",
             }}
             />
             <p style={{marginTop:'8px',fontSize:'15px',fontWeight:'bold'}}>{(cat.name)}</p>
             </div>
         ))}
        </div>

        {/* Search Bar */}
        <div className="mb-4 text-center">
          <h3 className="text-success mb-2">Search</h3>
          <InputGroup className="w-50 mx-auto">
          <Form.Control 
          type="text"
          placeholder="Search for dishes"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}

          />
          </InputGroup>
        </div>

        <div className="row g-4">
          {filteredFoodList.length > 0 ? (
            filteredFoodList.map((item) => (
              <div className="col-md-4" key={item._id}>
                <FoodItem {...item} />
              </div>
            ))
          ) : (
            <p className="text-center">No food found in this category.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
