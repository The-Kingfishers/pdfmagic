import { TextareaAutosize } from "@mui/material";
import React from "react";

const AddFeaturePage = () => {
  return (
    <div className="bg-customDarkBlue pt-5">
      <form>
        <div className="flex ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text dark:text-white text-white text-xl">Title</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of your Feature"
            required
            className="input  input-bordered rounded-none"
          />
        </div>
        </div>
        <div className="flex ">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text dark:text-white text-white text-xl">image</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            required
            className="input  input-bordered rounded-none"
          />
        </div>
        <div className="form-control w-full" >
          <label className="label">
            <span className="label-text dark:text-white text-white text-xl">Conversion Type</span>
          </label>
          <input
            type="text"
            name="convTypes"
            placeholder="Conversion Type"
            required
            className="input  input-bordered rounded-none"
          />
        </div>
        </div>
        
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text dark:text-white text-white text-xl">feature</span>
          </label>
          <textarea
            type="text"
            name="feature"
            placeholder="Feature of the conversion........"
            required
            cols="30"
            rows="10"
            className="input  input-bordered rounded-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-white text-white text-xl">Benefit</span>
          </label>
          <textarea
            type="text"
            name="benefit"
            placeholder="What are the benefits?"
            required
            className="input  input-bordered rounded-none"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <input className="btn w-full p-5  bg-[#5d57c9] border-none outline-none text-white flex  mx-auto" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddFeaturePage;
