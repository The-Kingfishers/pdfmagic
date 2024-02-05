import { usePathname } from "next/navigation";

const Converter = ({ File }) => {
    const fileReader = new FileReader()
    console.log(fileReader.result)
    // console.log(File)
    return (
        <div className="flex min-h-screen">
            <div className="w-3/4">
                <div className="flex justify-center items-center">
                    man
                </div>
            </div>
            <div className="w-1/4 ">

            </div>
        </div>
    );
};

export default Converter;