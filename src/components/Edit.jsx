import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";

function Edit() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({
    
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name,e.target.value);
    setProduct({...product, [e.target.name]: e.target.value });
  }
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
//   console.log(product);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Please fill all the fields");
    }

    
    const productIndex = products.findIndex((p)=>p.id == id);
    // console.log(product,productIndex);
    const copyData = [...products]
    copyData[productIndex]= {...products[productIndex],...product}
    // console.log(product,copyData);
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);


    // const product = {
    //   id: nanoid(),
    //   title,
    //   image,
    //   category,
    //   price,
    //   description,
    // };
    // setProducts([...products, product]);

    // localStorage.setItem("products", JSON.stringify([...products, product]));
    // navigate("/");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-10 w-screen flex flex-col h-screen items-center "
    >
      <h1 className="text-2xl text-center  mb-3 font-semibold">EDIT PRODUCT</h1>
      <input
        type="text"
        placeholder="title"
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <input
        type="url"
        placeholder="image link"
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <div className="w-1/2 flex">
        <input
          type="text"
          placeholder="category"
          className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 mr-3 "
          name="category"
        onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
          name="price"
        onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2"
        rows="10"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        placeholder="enter text here..."
      ></textarea>
      <div className="w-1/2">
        <button
          href=""
          className="text-xl  font-semibold p-2  rounded-md text-blue-500 border-blue-500 border-[3px]"
        >
          EDIT PRODUCTS
        </button>
      </div>
    </form>
  );
}

export default Edit;
