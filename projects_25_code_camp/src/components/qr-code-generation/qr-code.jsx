import QRCode from "react-qr-code";
import { useState } from "react";

const QrCodeGeneration = ()=>
{
    const [ value , setValue ] = useState("")

    const [ qrValue , setqrValue ] = useState("")

    return(
        <div className="flex flex-col items-center gap-2 border-2 border-blue-500">
            <h1>QR Code Generation</h1>

            <div className="flex gap-2">
                <input 
                type="text" 
                value={value}  
                className="border-2 border-gray-500 outline-none w-80 p-2 rounded-lg"
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
                
                />
                
                 <button 
                    disabled={!value.trim()}
                    className={`outline-none text-white p-2 rounded-md ${value.trim() ? "bg-blue-400 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                    onClick={()=>setqrValue( value.trim() )}
                >
                    Generate
                </button>

            </div>

            {
                <QRCode
                  size={400}
                  style={{ height: "auto", maxWidth: "25%", width: "100%" }}
                  value={qrValue}
                  viewBox={`0 0 256 256`}
                />
            }

        </div>
    )
}

export default QrCodeGeneration