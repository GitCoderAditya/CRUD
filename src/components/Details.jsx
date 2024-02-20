import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/Axios";
import Loading from "./Loading";

function Details() {

  const[products,setProducts] = useContext(ProductContext);
   const[product,setProduct]= useState(null)

     const{id}=  useParams()
    
 
  // const getSingleProduct = async ()=>{
  //   try{
  //       const{data}= await axios.get(`/products/${id}`);
        
  //       setProduct(data);
  //   }catch(err){
  //       console.log(err);
  //   }
  // }
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(!product){
      setProduct(products.filter((p)=> p.id == id)[0])
      console.log(product);
    }
    // getSingleProduct();
  },[])

  const productDeleteHandler= (id)=>{
    const deleteProduct = products.filter((p)=> p.id !== id);
    setProducts(deleteProduct);
    localStorage.setItem("products",JSON.stringify(deleteProduct));
    navigate("/");
    
  }




  return product ? (
    <div className="w-[80%]  flex  justify-center items-center h-full border-l-4 border-r-4 border-zinc-500 m-auto p-[10%]">
      <img
        className="h-[80%]   object-contain m-3  mix-blend-multiply"
        src={`${product.image}`}
        alt=""
      />
      <div className="ml-10">
        <h1 className="font-semibold text-3xl tracking-tight">
          {product.title}
        </h1>
        <h2 className="text-zinc-800 font-semibold my-5">{product.category}</h2>
        <h2 className="font-semibold text-red-500 mb-4">${product.price}</h2>
        <p className="font-semibold mb-5 ">{product.description}</p>
        <Link to={`/edit/${product.id}`} className=" mr-2  font-semibold p-2  rounded-md text-blue-300 border-blue-300 border-[3px]" >Edit</Link >
        <button onClick={()=>productDeleteHandler(product.id)} className="  font-semibold p-2  rounded-md text-red-300 border-red-300 border-[3px]">Delete</button>
      </div>
    </div>
  ) : (<Loading />);
}

export default Details;
