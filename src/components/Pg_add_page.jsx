import React from 'react';

const Pg_add_page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Half - Image */}
        <div className="w-full md:w-1/2">
          <img src="https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="PG Image" className="object-cover w-full h-full" />
        </div>

        {/* Right Half - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Add Your PG Listing</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input type="text" id="ownerName" name="ownerName" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact No</label>
              <input type="tel" id="contactNo" name="contactNo" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="rent" className="block text-sm font-medium text-gray-700">Rent</label>
              <input type="number" id="rent" name="rent" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability of Room</label>
              <select id="availability" name="availability" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="location" name="location" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
              <input type="text" id="image" name="image" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add PG</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pg_add_page;
