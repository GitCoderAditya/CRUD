import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Please fill all the fields");
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);

    // console.log(product);

    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    toast.success("Product added succesfully")
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-10 w-screen flex flex-col h-screen items-center "
    >
      <h1 className="text-2xl text-center  mb-3 font-semibold">
        ADD NEW PRODUCT
      </h1>
      <input
        type="text"
        placeholder="title"
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="url"
        placeholder="image link"
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
        onChange={(f) => setImage(f.target.value)}
        value={image}
      />
      <div className="w-1/2 flex">
        <input
          type="text"
          placeholder="category"
          className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 mr-3 "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2 "
          onChange={(f) => setPrice(f.target.value)}
          value={price}
        />
      </div>
      <textarea
        name=""
        className="text-xl text-center mb-3 bg-zinc-200 p-2 w-1/2"
        rows="10"
        onChange={(f) => setDescription(f.target.value)}
        value={description}
        placeholder="enter text here..."
      ></textarea>
      <div className="w-1/2">
        <button
          href=""
          className="text-xl  font-semibold p-2  rounded-md text-blue-500 border-blue-500 border-[3px]"
        >
          Add New Products
        </button>
      </div>
    </form>
  );
}

export default Create;
