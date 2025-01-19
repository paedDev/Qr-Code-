import React, { useState } from 'react'
import QRCode from "react-qr-code";
const QrCode = () => {
    const [qrCode,setQrCode] =useState('')
    const [input,setInput]=useState("")

    const handleGetInput = (e) => {
        const input = e.target.value.trim()
        if (input !== ""){
         setInput(input)
         console.log(`not input`);
         
        }
     }
    const handleGenerateQrCode = () => {
        setQrCode(input)
        setInput("")
    }
    
  return (
    <div className='flex min-h-screen justify-center items-center space-y-4'>
        <div className='flex items-center justify-center flex-col bg-green-200 p-10 space-y-10 rounded'>

     
        <h1 className='text-4xl font-semibold'>QR Code Generator</h1>
        <div>
            <input type="text" placeholder='Enter your value here' name='qr-code' onChange={handleGetInput} className='p-3 outline-none rounded-l-xl'/>
            <button onClick={handleGenerateQrCode}  className='px-8 py-3 bg-green-500 text-green-100 rounded-l-none rounded-r-xl'>
                Generate
            </button>
        </div>
        <div>
            <QRCode
            id ="qr-code-value"
            value = {qrCode} size={250} />
        </div>
        </div>
    </div>
  )
}

export default QrCode