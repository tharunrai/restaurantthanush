'use client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function RegisterPage() {
  return (
    <>
    <Navbar/>


        <div className="w-full">
            <h1 className='text-2xl md:text-6xl absolute w-full text-center top-50 md:top-50 '>Shop items</h1>
        <img src="/assets/bg/5.jpg" alt="Hero Background" className="w-full h-80 md:h-100 object-cover" />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
    <div className='flex flex-row flex-wrap'>

     <div className="text-center w-70 bg-white p-6 rounded-xl m-4 md:m-10 shadow">
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fphone.png&w=256&q=75"  className="1-20 h-10 mx-auto mb-4"/>
    <p className="text-gray-900 text-sm uppercase">Hotline</p>
    <p className="text-gray-900 text-sm uppercase">+4733378901</p>
    </div>
    <div className="text-center w-70 bg-white p-6 rounded-xl m-4 md:m-10 shadow">
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Fplaceholder.png&w=256&q=75"  className="1-20 h-10 mx-auto mb-4"/>
    <p className="text-gray-900 text-sm uppercase">Our Location</p>
    <p className="text-gray-900 text-sm ">55 Main Street, The Grand Avenue 2nd Block, New York City</p>
    </div>
    <div className="text-center w-70 bg-white p-6 rounded-xl m-4 md:m-10 shadow">
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2Femail.png&w=256&q=75"  className="1-20 h-10 mx-auto mb-4"/>
    <p className="text-gray-900 text-sm uppercase">Official Email</p>
    <p className="text-gray-900 text-sm ">info@restan.com</p>
    </div>
    
    </div>
      
      <div className="max-w-xl w-full text-center shadow p-10  rounded-lg">
        <p className="text-sm text-yellow-800 mb-1 font-semibold ">
          <code>-----KEEP IN TOUCH-----</code>
        </p>
        <h2 className="text-3xl text-black font-bold mb-6">Send us a Message</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border-1 border-gray-400 bg-gray-100 rounded-md placeholder-gray-400"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 bg-gray-100 border-1 border-gray-400 rounded-md placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 bg-gray-100 border-1 border-gray-400 rounded-md placeholder-gray-400"
            />
          </div>

          <textarea
            placeholder="Your Message*"
            rows="5"
            className="w-full p-3 bg-gray-100 border-1 border-gray-400 rounded-md placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-800 text-white border-1 border-gray-400 px-6 py-2 rounded-md hover:bg-yellow-900 transition-all w-fit"
          >
            Get In Touch
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>

  )

}