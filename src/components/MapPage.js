import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs, faMinus, faPlus, faSearch, faToilet, faToriiGate, faWater } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';

const MapPage = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="h-screen w-full bg-gray-400">
      <div className="fixed flex items-center justify-between top-5 lg:left-20 left-4 right-4 lg:right-20">
        <div className='flex'>
          <input type="text" placeholder="Search..." className='h-10 lg:w-96 pl-2 rounded-l-full outline-none lg:translate-x-24' />
          <div className='bg-white h-10 flex items-center px-2 rounded-r-full lg:translate-x-24'>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className="px-2 py-2 bg-[#ffcc00] rounded-full flex items-center">
          <FontAwesomeIcon icon={faUserCircle} className='h-6 w-6 mr-2' />
          {username && <span className="text-lg font-semibold">{username}</span>}
        </div>
      </div>

      <div className="fixed lg:flex flex-col gap-4 left-10 top-24 hidden">
        <div className="flex flex-col items-center px-2 py-4 bg-gray-600 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faWater} className='px-4 py-4 bg-white rounded-full mb-2' />
          <p>DRINK WATER</p>
        </div>
        <div className="flex flex-col items-center px-2 py-4 bg-gray-600 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faToilet} className='px-4 py-4 bg-white rounded-full mb-2' />
          <p>TOILET</p>
        </div>
        <div className="flex flex-col items-center px-2 py-4 bg-gray-600 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faWatchmanMonitoring} className='px-4 py-4 bg-white rounded-full mb-2' />
          <p>Waiting Hall</p>
        </div>
        <div className="flex flex-col items-center px-2 py-4 bg-gray-600 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faToriiGate} className='px-4 py-4 bg-white rounded-full mb-2' />
          <p>EXIT</p>
        </div>
      </div>

      <div className="fixed flex flex-col gap-4 right-8 bottom-10">
        <button className="h-10 w-10 rounded-full bg-white cursor-pointer">
          <FontAwesomeIcon icon={faPlus} className='h-[45%] w-[45%] align-middle' />
        </button>
        <button className="h-10 w-10 rounded-full bg-white cursor-pointer">
          <FontAwesomeIcon icon={faMinus} className='h-[45%] w-[45%] align-middle' />
        </button>
        <button className="h-10 w-10 rounded-full bg-white cursor-pointer">
          <FontAwesomeIcon icon={faCrosshairs} className='h-[70%] w-[70%] align-middle' />
        </button>
      </div>
    </div>
  );
};

export default MapPage;
