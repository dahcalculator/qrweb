
import { useQRCode } from 'next-qrcode';

import React from 'react'

const Mini = ({data}) => {
   
  const { SVG } = useQRCode();
   
  return (
        <div>
          <div className=" h-full flex flex-col gap-5 items-center justify-center ">
                <div className="w-28 h-32 bg-slate-500 rounded-full  text-left items-center flex justify-center
                      ">
                        B L
                  </div>
              
                  <div className="flex-col justify-center items-center flex w-full capitalize ">
                            <div className="text-xl font-bold text-gray-400"> Name: {data?.user?.name}
                            </div>
                            <div className="text-xs">Rank: DPO</div>
                            <div className="text-xs">Email: {data?.user?.email}
</div>
                  </div>  
                  <div className=" w-full flex justify-center items-center ">
                   <SVG
                    text={"http://localhost:3000/profile"}
                    options={{
                        margin: 2,
                        width: 200,
                        color: {
                        dark: '#010599FF',
                        light: '#FFBF60FF',
                        },
                    }}
                    />
                  </div>
                            
          </div>
          </div>
  )
}

export default Mini