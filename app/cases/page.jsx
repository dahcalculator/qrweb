// import CaseCard from "../components/CaseCard"

import CaseCard from '../components/CaseCard'
import Sidebar from '../components/Sidebar'
const page = async () => {
  

  return (
    
    <div className='flex w-full h-full space-5 justify-evenly'> 
      <div className='w-2/12 '>
      <Sidebar/>
      </div>
      <div className='w-10/12 mx-4'>
      <CaseCard/>   
      </div>
    </div>

  )
}

export default page