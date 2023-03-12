import React, { useState } from "react";
import PreviewImage from "../../user/PreviewImage";

function VmVenueAddNew() {


  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <div className="flex gap-x-4 ">
          <div className="mt-3 w-1/2 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Venue Name
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner capitalize"
              placeholder="Enter Venue Name"
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Mobile
            </label>
            <input
              type="number"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Enter Mobile"
              required
            />
          </div>
          <div className="mt-3 w-1/3 ">
            <label htmlFor="name" className=" block text-sm text-gray-700">
              Place
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner "
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="flex-col w-2/4">
            <div className="flex gap-x-4 ">
              <div className="mt-3 w-2/4 ">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  District
                </label>
                <select type="" name="name" className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner capitalize" required>
                  <option selected disabled className="text-gray-400 select-none">
                    Choose a District
                  </option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kasaragod">Kasaragod</option>
                </select>
              </div>
              <div className="mt-3 w-2/4">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  name="name"
                  className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
                  placeholder="Price"
                  required
                />
              </div>
              <div className="mt-3 w-2/4 ">
                <label htmlFor="name" className=" block text-sm text-gray-700">
                  Discount %
                </label>
                <input
                  type="number"
                  name="name"
                  className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
                  placeholder="Discount Percentage"
                  required
                />
              </div>
            </div>
            <div className="flex">
              <div className="mt-3 w-1/2">
                <label htmlFor="image" className="block text-sm text-gray-700">
                  Image
                </label>
                <div className="flex items-center justify-between">
                  <label htmlFor="image-upload" className=" cursor-pointer p-2  rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input
                      id="image-upload"
                      name="image"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="image" className="block text-sm text-gray-700">
                  Document
                </label>
                <div className="flex items-center justify-between">
                  <label htmlFor="image-upload" className=" cursor-pointer p-2  rounded text-gray-400 bg-gray-100/50 shadow-inner focus:outline-none ">
                    <span>Choose a file</span>
                    <input
                      id="document-upload"
                      name="document"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => setDocument(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4">
            <div class="mt-3 w-full">
              <label for="description" class="block text-sm text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Type something about your turf"
                name="description"
                rows="4"
                class="bg-gray-100/50 focus:outline-none shadow-inner p-2 focus:border-b-2 focus:border-green-600 block w-full border-gray-300 rounded"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4">
          <div className="mt-3 ">
            <label htmlFor="name" className=" block text-sm">
              Address
            </label>
            <input
              type="number"
              name="name"
              className="bg-gray-100/50 block  focus:outline-none rounded  focus:border-b-2 focus:border-green-600 p-2 w-full shadow-inner"
              placeholder="Enter Movie Name"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VmVenueAddNew;
