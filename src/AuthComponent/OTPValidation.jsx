import React, { useState,useRef } from 'react'
import toast from 'react-hot-toast';

const OTPValidation = () => {
    let initialOtpState={
        box1:"",
        box2:"",
        box3:"",
        box4:"",

    };
    let [otpValidation ,setOtpValidation]=useState(initialOtpState);

    let{box1,box2,box3,box4}=otpValidation;


    let box1Ref=useRef();
    let box2Ref=useRef();
    let box3Ref=useRef();
    let box4Ref=useRef();


    let handleOtpChange =(e,inpRef)=>{
        let value=e.target.value;
        let name=e.target.name;


        if("0123456789".includes(value))
        {
            setOtpValidation({...otpValidation,[name]: value });
            if(value.length=="1")
            {
                inpRef.current.focus();
            }
        }

        
    }
    let handleSubmitOtp=(e)=>{
        e.preventDefault();

        console.log("Otp" ,otpValidation);
        toast.success("otp submitted ");
    }
    let handleBackspace=(e,prevref)=>{
        if(e.key=="Backspace"&& e.target.value==""){
            prevref.current.focus();
        }
    };
  return (
    <section className="h-[calc(100vh-70px)] w-[100%] flex justify-center items-center">
      <article className="h-[400px] w-[450px] bg-white p-[20px]">
        <header className="text-center">
            <h1 className="font-semibold text-2xl">OTP validation</h1>
            <p>We have successfully sent <span className="font-bold">OTP</span> to{" "}</p>
            <span>email</span>
        </header>

        <main>
            
            <form action="">
                <label htmlFor="">Enter code here </label>

               <div className="flex justify-evenly m-[10px]">

                <input type="tel" ref={box1Ref} maxLength={1} onClick={handleBackSpace} className="h-[75px] w-[75px] rounded-lg border  text-center text-5xl caret-transparent outline-none "  onChange={(e)=>{handleOtpChange(e,box2Ref)}} value={box1} name="box1"/>
                <input type="tel" ref={box2Ref}  maxLength={1}  className="h-[75px] w-[75px] rounded-lg border  text-center text-5xl caret-transparent outline-none " onChange={(e)=>{handleOtpChange(e,box3Ref)}} value={box2} name="box2"/>
                <input type="tel" ref={box3Ref}  maxLength={1}  className="h-[75px] w-[75px] rounded-lg border  text-center text-5xl caret-transparent outline-none " onChange={(e)=>{handleOtpChange(e,box4Ref)}} value={box3} name="box3" />
                <input type="tel" ref={box4Ref}  maxLength={1}  className="h-[75px] w-[75px] rounded-lg border  text-center text-5xl caret-transparent outline-none " onChange={handleOtpChange} value={box4} name="box4"/>

               </div>
              <div> 
             <button onClick={handleSubmitOtp}  className="w-[100%] bg-[#2666fc]  text-[white] py-[7px] rounded-md cursor-pointer bg-[#0b52f8]">Verify</button>
           </div>

            </form>
        </main>
        <footer className=" justify-evenly">
            <p>Don't recive OTP </p>
            <p>Resend otp In 0.00 </p>
        </footer>

      </article>
    </section>
  )
}

export default OTPValidation
