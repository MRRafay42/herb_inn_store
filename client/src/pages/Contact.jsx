import React from "react";

const Contact = () => {
  return (
    <div className=" mt-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-8 h-fit">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
                  alt="Phone"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561188.png"
                  alt="Email"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-500">support@clinicstore.com</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
                  alt="Address"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Address</h3>
                <p className="text-gray-500">
                  123 Health Street, Medical City, MC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/151/151917.png"
                  alt="Hours"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Working Hours
                </h3>
                <p className="text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-500">Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-3 rounded-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="h-5 w-5"
                  />
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                >
                  <option>General Inquiry</option>
                  <option>Product Questions</option>
                  <option>Order Support</option>
                  <option>Medical Advice</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 border"
                  defaultValue={""}
                />
              </div>

              <div className="flex items-center">
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 w-full relative">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=123+Health+Street,Medical+City,MC+12345&zoom=14&size=1200x600&maptype=roadmap&markers=color:red%7C123+Health+Street,Medical+City,MC+12345&key=YOUR_API_KEY"
              alt="Map of our location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-500 opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
