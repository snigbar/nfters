import CountUp from 'react-countup';
import Heading from '../Components/Heading'
import img1 from '../assets/Header/img1.png'
import img2 from '../assets/Header/img2.png'
import img3 from '../assets/Header/img3.png'
import { FaEthereum } from "react-icons/fa";
import user1 from '../assets/Users/user6.png'




const Header = () => {



  return (
   <section className='py-12 lg:min-h-[85vh] flex flex-col justify-center items-center lg:flex-row mb-8'>

    {/* heading text */}
    <div className='flex flex-col justify-between items-start gap-4 w-4/5 lg:w-3/5'>
        <Heading size='lg:text-[40px]'>Discover, and Collect Digital Arts and Nfts</Heading>
        <p className='font-dmsans text-gray-text text-lg md:text-xl text-center lg:text-left w-full lg:w-[70%] leading-[165%]'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
        <button className="text-white bg-primary hover:bg-primary-dark py-3 px-6 text-lg md:py-5 md:px-10 md:text-xl rounded-full active:translate-y-1 transition-transform duration-300 hover:drop-shadow-md mt-3 mx-auto lg:mx-0">Explore Now</button>
        {/* count */}
        <div className='flex gap-6 justify-center lg:justify-start w-full '>
        <div>
        <Heading size='lg:text-[40px]'><CountUp end={98} duration={6}/> K+</Heading>
        <p className='font-dmsans text-gray-text text-xl text-center'>Artwork</p>
        </div>
        <div>
        <Heading size='lg:text-[40px]'><CountUp end={12} duration={6}/> K+</Heading>
        <p className='font-dmsans text-gray-text text-xl text-center'>Auction</p>
        </div>
        <div>
        <Heading size='lg:text-[40px]'><CountUp end={15} duration={6}/> K+</Heading>
        <p className='font-dmsans text-gray-text text-xl text-center'>Artist</p>
        </div>
        </div>
    </div>

    {/* cards */}
  
    <div className='w-full lg:w-2/5 h-full py-8'>
      <div className='card-container relative'>
      {/* card 1 */}

      <div className="card card-1 h-[320px] w-[280px] lg:h-[400px] lg:w-[360px] mx-auto rounded-3xl px-6 py-8 text-white bg-white bg-opacity-20 backdrop-blur-lg flex flex-col justify-between">
          {/* heading */}
        <div className='text-gray-dark-text'>
        <h1 className='font-dmsan text-2xl'>Abstr Gradient NFT</h1>
        <div className='flex items-center gap-2 mt-2'>
          <img className='w-8 rounded-full' src={user1}></img>
          <p className='text-xl'>Arkhan17</p>
        </div>
        </div>
        {/* card footer */}

        <div className='flex justify-between items-center px-2 py-2 bg-white bg-opacity-20 backdrop-blur-lg text-gray-dark-text'>

          <div>
            <p className='text-xs'>Current Bids</p>
            <div className='flex gap-3 items-center text-lg'>
            <FaEthereum/>
            <p className='mt-1'>0.25 ETH</p>
            </div>
          </div>

          <div className=''>
          <p className='text-xs'>Ends in</p>  
          <p className='text-lg mt-1'>12h  43m  42s</p>
          </div>

        </div>

        </div>

       {/* card 2 */}
       
       <div className="card card-2 h-[320px] w-[280px] lg:h-[400px] lg:w-[360px] mx-auto rounded-3xl px-6 py-4 md:py-2 text-white flex flex-col justify-between">
          {/* heading */}
        <div>
        <h1 className='font-dmsan text-2xl'>Abstr Gradient NFT</h1>
        <div className='flex items-center gap-2 mt-2'>
          <img className='w-8 rounded-full' src={user1}></img>
          <p className='text-xl'>Arkhan17</p>
        </div>
        </div>
        {/* card footer */}

        <div className='flex justify-between items-center px-2 py-2 bg-white bg-opacity-20 backdrop-blur-lg'>

          <div>
            <p className='text-xs'>Current Bids</p>
            <div className='flex gap-3 items-center text-lg'>
            <FaEthereum/>
            <p className='mt-1'>0.25 ETH</p>
            </div>
          </div>

          <div className=''>
          <p className='text-xs'>Ends in</p>  
          <p className='text-lg mt-1'>12h  43m  42s</p>
          </div>

        </div>

        </div>

{/* first card */}
        <div className="card card-3 h-[320px] w-[280px] lg:h-[400px] lg:w-[360px] mx-auto rounded-3xl px-6 py-8 text-white flex flex-col justify-between">
          {/* heading */}
        <div>
        <h1 className='font-dmsan text-2xl'>Abstr Gradient NFT</h1>
        <div className='flex items-center gap-2 mt-2'>
          <img className='w-8 rounded-full' src={user1}></img>
          <p className='text-xl'>Arkhan17</p>
        </div>
        </div>
        {/* card footer */}

        <div className='flex justify-between items-center px-2 py-2 bg-white bg-opacity-20 backdrop-blur-lg'>

          <div>
            <p className='text-xs'>Current Bids</p>
            <div className='flex gap-3 items-center text-lg'>
            <FaEthereum/>
            <p className='mt-1'>0.25 ETH</p>
            </div>
          </div>

          <div className=''>
          <p className='text-xs'>Ends in</p>  
          <p className='text-lg mt-1'>12h  43m  42s</p>
          </div>

        </div>

        </div>

      </div>
    </div>

    

   </section>
  )
}

export default Header