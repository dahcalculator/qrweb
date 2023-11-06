import Sidebar from "../components/Sidebar"

Sidebar

const page = () => {
  return (
    <div className='flex w-full h-full space-5 justify-evenly'> 
    <div className='w-2/12 '>
    <Sidebar/>
    </div>
    <div className='w-10/12 mx-4 bg-white h-full'>
    evidence  
    </div>
  </div>
  )
}

export default page