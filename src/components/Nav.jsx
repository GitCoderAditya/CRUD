import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct = [...new Set(distinct)];
//   console.log(distinct);

  const color = () =>{
    return `rgba(${(Math.floor(Math.random() * 255) )},${(Math.floor(Math.random() * 255) )},${(Math.floor(Math.random() * 255) )},1.4)`
  }
//   console.log(color);
  return (
    <nav className="w-[20%] h-full bg-zinc-300 flex flex-col items-center  pt-3">
      <a
        href="/create"
        className="text-xl  font-semibold p-2  rounded-md text-blue-500 border-blue-500 border-[3px]"
      >
        Add Products
      </a>
      <hr className="w-[90%] my-2" />
      <h1 className="text-2xl w-[80%] font-semibold ">Category Filter</h1>
      <div className="  w-[80%] flex flex-col ">
        {distinct.map((category, index) => (
          <Link to={`/?category=${category}`} key={index} className="font-semibold mb-2 ">
            <span style={{backgroundColor : color()}} className="inline-block rounded-full w-[10px] h-[10px]  mr-2"></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
