import React from "react";

const Card = () => {
  return (
    <>
    <div classNameName="bg-fuchsia-800 pt-6">
    <div className="flex justify-center">
  <div className="mb-3 xl:w-96">
    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
      <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
    </div>
  </div>
</div>
    
    
</div>
    <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Academy</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Delete
          </button>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
          alt="River"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Academy</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Delete
          </button>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
          alt="Forest"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Academy</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Edit
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Delete
          </button>
        </div>
         
      </div>
      
    
      <div>
      <button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> 
        
     
    </div>
    </div>
  
   
    </>
  );
};

export default Card;
