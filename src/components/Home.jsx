import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(ProductContext);
//   console.log(products);
  const {search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);




 const[filter,setFilter]= useState(null)

//   const getProductsCategory = async () =>{
//     try{
//         const{data} = await axios.get(`/products/category/${category}`)
//         // console.log(data);
//         setFilter(data)
//     }catch(err){
//         console.log(err);
//     }

//     }



    useEffect(()=>{
        if(!filter || category === "undefined"){
            setFilter(products)
        }
        if (category != "undefined"  ){
            // getProductsCategory()
            setFilter(products.filter((p)=>p.category == category));
        }
    },[products,category])
  

  return products ? (
    <>
      <Nav />
      <div className=" p-16 w-[80%] bg-purple-50  flex flex-wrap  overflow-y-auto  justify-between">
        {filter && filter.map((prod, index) => (
          <Link key={index}
            to={`/details/${prod.id}`}
            className="card w-[18%] h-[30vh]  flex flex-col items-center justify-center shadow-2xl border-[3px] border-zinc-500 rounded p-4"
          >
            <div
              className="w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110"
              style={{
                backgroundImage:
                  `url(${prod.image})`,mixBlendMode:"multiply"
              }}
            ></div>

            <h1 className="text-center hover:text-blue-900 font-semibold">
              {prod.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
  }

export default Home;
