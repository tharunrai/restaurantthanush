'use client';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function RegisterPage() {
  return (
    <>
      <Navbar/>
      <div className='bg-white '>

        <div className="w-full">
            <h1 className='text-2xl md:text-6xl absolute w-full text-center top-50 md:top-60 '>Register Page</h1>
        <img src="/assets/bg/5.jpg" alt="Hero Background" className="w-full h-80 md:h-120 object-cover" />
      </div>
      <div className=' w-70 md:w-full md:px-10 md:max-w-5xl md:flex md:gap-5  mt-10  m-auto'>
    
         <img src="/assets/logo-light.webp" alt="Hero Background" className="absolute w-25 m-4" />
         <img src="/assets/bg/6.png" alt="Hero Background" className="w-full rounded-t-lg h-65 md:h-135 md:rounded-lg " />
         <div className='md:w-600 '>

          <h1 className='text-amber-500 text-2xl m-5'>CREATE AN ACCOUNT</h1>
          <p className='text-black m-5'>Enter your details to create a new account</p>
          
          <div className="space-y-4 m-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input type="text" placeholder="Enter name" className="w-full px-4 py-3 border border-gray-600 rounded-md"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input type="email" placeholder="Enter email " className="w-full px-4 py-3 border border-gray-600 rounded-md"/>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                type="password" placeholder="Enter password" className="w-full px-4 py-3 border border-gray-600 rounded-md"/>
            </div>
           < div className='w-full text-center'>
            <button className='bg-amber-500 w-60 h-10 m-auto rounded'> Register</button></div>
          </div>
       <h1 className='text-black text-2xl w-full text-center'>Or Register With</h1>
       <div className=' w-full text-center md:flex md:gap-6'>

        <button className='border-1 border-gray-500 text-black mb-4 w-60 h-10 m-auto rounded'> Google</button> 
        <button className='border-1 border-gray-500 text-black mb-4 w-60 h-10 m-auto  rounded'> facebook</button> 
       </div>
      </div>
      </div>
          
      </div>

      <Footer/>
    </>
  );
}