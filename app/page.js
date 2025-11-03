
'use client';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full">
        <img src="/assets/bg/2.jpg" alt="Hero Background" className="w-full h-120 md:h-180 object-cover" />
      </div>
     
      {/* Main Content Section */}
      <div className="bg-zinc-800 text-white py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
            
            {/* Images Section */}
            <div className="flex-shrink-0 relative">
              <div className="relative">
                <img src="/assets/15.webp" alt="Food Image 1" className="w-48 md:w-128 h-auto rounded-lg" />
              </div>
              
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Best food ideas & <br/>traditions in the world
              </h1>
              
              <div className="flex  flex-col md:flex-row md:max-w-200 gap-6">
                {/* Description */}
                <div className="flex-1">
                  <p className="text-gray-300 text-sm md:text-base md:text-lg leading-relaxed">
                    Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. 
                  </p>
                </div>
                
                {/* Reservation Info */}
                <div className="bg-zinc-700 p-4 md:p-6 rounded-lg flex-shrink-0 md:w-64">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold text-white mb-2">Lunch</h3>
                      <p className="text-gray-300">Saturday and Sunday</p>
                      <p className="text-gray-300">Reservations from 12pm to 1:30pm</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">Dinner</h3>
                      <p className="text-gray-300">Thursday to Sunday</p>
                      <p className="text-gray-300">Reservations from 6pm to 8:45pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}