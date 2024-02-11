import React from 'react';

const JpgToPdf = ({ url }) => {
    const handleConvertJpg2pdf = () => {
        console.log(url);
    }
    return (
        <div className=" md:flex  h-screen ">
            <div className="md:w-2/3  ">
                <h2 className='text-center mt-10 font-bold text-3xl'>JPG To Pdf Convert</h2>
                <div className=" flex justify-center items-center h-[85vh] ">
                    <iframe src={url} className=" bg-cover h-[50vh] w-[40vh] "  ></iframe>
                </div>

            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button onClick={handleConvertJpg2pdf} className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Convert 2 PDF</button>
                </div>
            </div>
        </div>
    );
};

export default JpgToPdf;