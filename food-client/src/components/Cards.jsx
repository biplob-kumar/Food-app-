import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2'
const Cards = ({ item }) => {
  const {name,image,price,recipe,_id}=item

  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const {user}= useContext(AuthContext)
  // console.log(user)
  const navigate=useNavigate();
  const location=useLocation();
//   add to cart 
const handleAddtoCart=(item)=>{
//  console.log("click", item)
if (user && user?.email) {
  const cartItems={
    menuItemId:_id,
    name, quantity:1, 
    image,
    price,
    email:
    user.email}
  // console.log(cartItems)
  
  fetch("http://localhost:8000/carts",{
    method:"POST",
    headers:{
   "content-type":"application/json"
    },
    body: JSON.stringify(cartItems)

  })
  .then(res => res.json())
  .then(data=> {
  
    if (data.insertedId) {
      
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Your Cart has been Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
}else{
  Swal.fire({
    title: "Please Login",
    text: "Without and account can,t avle to add product!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Singup Now!"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate('/signup',{state:{from:location}})
    }
  });
}


};
  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (


<div to={`/menu/${item._id}`} className="card shadow-xl relative mr-5 md:my-5  bg-white ">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
        </figure>
      </Link>
      <div className="card-body">
       <Link to={`/menu/${item._id}`}><h2 className="card-title">{item.name}!</h2></Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$ </span> {item.price}
          </h5>
          <button className="btn bg-green text-white border-none" onClick={()=> handleAddtoCart(item)} >Add to Cart </button>
        </div>
      </div>
    </div>

  );
};

export default Cards;