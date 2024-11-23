import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div>
      <Header />

      <section
        id="home"
        className="bg-[url('./image/bgimage.jpg')] bg-cover bg-center h-screen flex flex-col justify-center items-center px-6 text-white font-serif font-semibold"
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-5xl font-extrabold text-center mb-6">
            Find Your Dream Home
          </h2>
          <p className="text-lg text-center mb-8">
            Browse through thousands of properties available for rent
          </p>
       <form className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter city or neighborhood"
              className="p-4 rounded-l-lg w-64"
            />
          <select className="p-4 rounded-r-lg bg-gray-100 text-gray-400" defaultValue="">
         <option value="" disabled>
       Select Your Bedroom
      </option>
      <option value="1">1 Bedroom</option>
      <option value="2">2 Bedrooms</option>
      <option value="3">3+ Bedrooms</option>
     </select>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-medium transition duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </section>

 
      {/* Properties Section */}
      <section id="properties" className="py-16 px-6 bg-gray-700 bg-[url('./image/apartment.jpg')]  bg-cover bg-center h-screen flex flex-col justify-center items-center ">
        <div className=" max-w-screen-xl mx-auto text-center">
          <h2 className="text-5xl font-semibold font-serif  text-pink-700 mb-8">   
            Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Property Card */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold font-serif text-white mb-4">
                Luxury Apartment
              </h3>
              <p className="font-semibold font-serif text-white">
                2 Beds | 2 Baths | 1200 sqft
              </p>
              <button className="mt-4  font-semibold   hover:bg-blue-500 font-serif text-white  bg-blue-600 px-4 py-2 rounded">
                View Details
              </button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold font-serif text-white mb-4">
                Oceanview Apartment
              </h3>
              <p className="font-semibold font-serif text-white">
                3 Beds | 2 Baths | 1500 sqft
              </p>
              <button className="mt-4  font-semibold   hover:bg-blue-500 font-serif text-white  bg-blue-600 px-4 py-2 rounded">
                View Details
              </button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold font-serif text-white mb-4">
                City Center Loft Appartment
              </h3>
              <p className="font-semibold font-serif text-white">
                {" "}
                2 Beds | 1 Bath | 950 sqft
              </p>
              <button className="mt-4  font-semibold   hover:bg-blue-500 font-serif text-white  bg-blue-600 px-4 py-2 rounded">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section
  id="about"
  className="py-16 px-6 bg-gray-900 bg-cover bg-center"
>
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-5xl font-serif font-semibold text-white mb-8">
      About Us
    </h2>
    <p className="text-lg text-white font-serif mb-8 max-w-3xl mx-auto">
      At Rentify, we are committed to helping people find their perfect home
      with ease. Our team of real estate professionals curates a list of the
      best rental properties to fit any budget. Whether you’re looking for a
      cozy apartment or a spacious family home, we’ve got something for
      everyone.
    </p>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-700">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-5xl font-semibold  text-white font-serif mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-white font-serif mb-8 max-w-3xl mx-auto">
            Get in touch with our team and we will help you find your next home.
          </p>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-900 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-900 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-900 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 font-semibold   hover:bg-blue-500 font-serif text-white  p-3 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;

