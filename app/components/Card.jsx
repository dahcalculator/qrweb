async function getPostsDate(){

  
}



const Card
 = () => {
    const cardList = 
    [
        {cardTitle: 'total  number case',
        cardNum: `50`,
        perf: "10 "  
    },
        {cardTitle: 'total num of solve cases',
        cardNum: `85`,
        perf: "10 "  
    },
        {cardTitle: 'total num of unsolve cases',
        cardNum: `50`,
        id:  1,
        perf: "10 "  
    }
    ]
  return (
    
    <div >

        <div className="cardB flex justify-around  w-full h-32 my-5 py-8 ">
            {
              cardList.map((a, i) =>(
        <div key={a.i} className="flex-col gap-20justify-evenly capitalize " >
            <div  className=" flex-col">
            <div className="text-xs text-gray-400" > {a.cardTitle} </div>
            <div className="text-2xl font-bold"> {a.cardNum}</div>
            </div> 
        </div>   
          
         ))
        }
      </div>

    </div>
  )
}

export default Card
