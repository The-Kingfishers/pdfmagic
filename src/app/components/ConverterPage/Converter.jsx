"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import JpgToPdf from "../JpgToPdf";
import WordToPdf from "../WordToPdf";

const Converter = ({ File, conversionType }) => {
    console.log(conversionType);
    const file = File[0]
    const [url, seturl] = useState({})
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
        e.preventDefault()
        const data = fileReader.result
        seturl(data)
        console.log(data);
    }
    fileReader.readAsDataURL(file)

    switch (conversionType) {
        case "wordtopdf":
            return <WordToPdf />
        case "jpgtopdf":
        return <JpgToPdf url={url} />
    }

};

export default Converter;
{/* <embed src={url} type="application/pdf" width="100%" height="600px" /> */}

{/* <Image
    src={url}
    width={400}
    height={60}
    alt="img">
</Image> */}