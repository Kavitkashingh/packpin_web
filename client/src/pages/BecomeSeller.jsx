import React from 'react'
import img from '../assets/business building.png'

const BecomeSeller = () => {
  return (
    <div className='w-[100%] h-[100%] items-center justify-center border-red-500 ' >


      <form className="w-[90%] mt-2 ml-4 flex flex-col items-center justify-center">
        <div className='flex flex-col justify-center  items-center'>
          <img src={img} alt="" className='h-14 w-14' />
          <span className='text-center text-[29px] xs:text-[15px] font-bold  '>Get the best quotes for  Bulk Orders</span> <br />
          <span className='text-center text-[13px] mt-[-10px]'>Fill your bulk query requirements, Our experts will get in touch with you with the best - all of this within 30min. </span>
        </div>

        <div className="w-[95%] my-6 flex flex-col">
          <div className="w-full">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
              Name
            </label>
            <input className="border-red-500 appearance-none block w-full  text-gray-700 border  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />
          </div>
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Mobile Number
            </label>
            <input className="border-red-500 appearance-none block w-full  text-gray-700 border  rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
          </div>
        </div>

        <div className="w-[95%]  flex flex-col">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Email ID
            </label>
            <input className="border-red-500 appearance-none block w-full  text-gray-700 border  rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
          </div>
        </div>

        <div className='w-[95%] my-6 space-x-2 grid grid-cols-2'>
          <div className="w-full flex flex-col">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Product type
            </label>
            <div className="relative border-red-500">
              <select className=" border-red-500 block appearance-none w-full  border text-gray-700 py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="w-full mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
              Quantity
            </label>
            <input className="border-red-500 appearance-none block w-full  text-gray-700 border rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
          </div>

          <div className="w-[96%] my-6 mr-2 flex flex-col">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Remark
            </label>
            <textarea className=" w-[335px]  border-red-500 appearance-none h-[107px]  text-gray-700 border rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Remark" />
          </div>

        </div>


        <button class="w-[93%] mt-[-30px] mb-10 bg-red-500 hover:bg-green-500 text-white hover:text-black font-bold py-2 ml-3 rounded-2xl focus:outline-none focus:shadow-outline text-19  " type="button">
          Submit
        </button>

      </form>

    </div>
    // sshdfsdhfjdhjkdfg


  )
}

export default BecomeSeller
