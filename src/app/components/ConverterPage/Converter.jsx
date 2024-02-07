"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Converter = ({ File }) => {

    const file = File[0]
    const [url, seturl] = useState({})
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
        e.preventDefault()
        const data = fileReader.result
        seturl(data)
    }
    fileReader.readAsDataURL(file)
    return (
        <div className=" md:flex  h-[85vh] ">
            <div className="md:w-2/3  ">
                <div className=" flex justify-center items-center h-[85vh] ">
                    <iframe src={url} className=" bg-cover h-[50vh] w-[40vh] "  ></iframe>
                </div>

                {/* <embed src={url} type="application/pdf" width="100%" height="600px" /> */}

                {/* <Image
                    src={url}
                    width={400}
                    height={60}
                    alt="img">
                </Image> */}
            </div>
            <div className="md:w-1/3 border-x-2">
                <div className="  text-center ">
                    <button className="btn mt-[70vh] bg-slate-800 text-white w-40 rounded-md  ">Convert</button>
                </div>
            </div>
        </div>
    );
};

export default Converter;