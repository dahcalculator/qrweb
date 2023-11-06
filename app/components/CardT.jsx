import {MdGraphicEq} from "react-icons/md"
import {BsGraphUpArrow} from "react-icons/bs"

const CardT = () => {
  return (
    <div className=" flex justify-start  w-full  h-40 gap-5 p-2">
       
        <div className="cardbox w-1/3 gap-4" >
        <div className="  flex flex-col gap-2">
            <div className="text-xs text-gray-400" > Emergency data </div>
            <div className="text-2xl font-bold"> 774k </div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <i className="text-9xl text-amber-500"><MdGraphicEq/></i>
        </div>

        </div>
        
        <div className="cardbox w-2/3 flex flex-row gap-2">
          <div>
            <div className="text-sm text-gray-400" > All year total number of cases </div>
            <div className="text-xs text-gray-300" > from year to year</div>
            <div className="text-xl font-bold"> 26561561</div>
            </div>            
          <div className=" w-full flex items-center justify-center">
            <i className="text-9xl text-amber-500"><BsGraphUpArrow/></i>
          </div>

        </div>
    </div>
  )
}

export default CardT