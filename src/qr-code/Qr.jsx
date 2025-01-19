import React,{useState} from 'react'
import QrCode from "react-qr-code"
const Qr = () => {
    const [qrCode,setQrCode]= useState("")
    const [inputVal, setInputVal] =useState("")

    const handleInputValue = (e) => {
        setInputVal(e.target.value)
    }
    const handleGenerateQrCode = () => {
        setQrCode(inputVal)
        setInputVal("")
        console.log(setQrCode);
        
    }
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-green-200 flex flex-col justify-center items-center space-y-4 p-10 rounded shadow-2xl'>
            <h1 className='text-4xl font-bold'>Qr Code Generator</h1>
            <div>
                <input type="text" placeholder='Input a value here' onChange={handleInputValue} className='p-3 outline-none rounded-l-xl '/>

                <button className='px-8 py-3 bg-green-500 text-green-700 rounded-r-xl hover:bg-green-400 hover:text-green-200' onClick={handleGenerateQrCode}>
                    Generate
                </button>

                
            </div>
            <div>
                <QrCode className='transform hover:-translate-y-2 transition duration-500 ' value={qrCode} bgColor='white'/>
            </div>
            <div>
                <h1>{inputVal}</h1>
            </div>

        </div>
    </div>
  )
}

export default Qr