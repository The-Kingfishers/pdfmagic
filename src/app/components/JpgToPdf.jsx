import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const JpgToPdf = ({url, type}) => {
    console.log(type);
    console.log(url);
        // if (type !== "image/jpeg") {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Invalid File Type',
        //         text: 'Please upload a valid image for conversion.',
        //     });
        //     redirect("/services");
        // }
    
    const handleConvertJpg2pdf = () => {
        
    }
    return (
        <div className=" md:flex  h-[85vh] ">
            <div className="md:w-2/3  ">
            <h2 className='text-center mt-10 font-bold text-3xl'>JPG To Pdf Convert</h2>
                <div className=" flex justify-center items-center h-[85vh] ">
                    <Image width={100} height={100} src={url} alt='UploadedJpg image for conversion' className=" bg-cover h-[50vh] w-[40vh] "  ></Image>
                </div>

            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button  className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Convert 2 PDF</button>
                </div>
            </div>
        </div>
    );
};

export default JpgToPdf;


// if (/^image\/jpeg$/i.test(type)) {
//     Swal.fire({
//         icon: 'error',
//         title: 'Invalid File Type',
//         text: 'Please upload a valid image for conversion.',
//     });
//     redirect("/services");
// }