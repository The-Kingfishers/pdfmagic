"use client"

import useServices from "@/hooks/useServices";
import ServicesCard from "./servicesCard/ServicesCard";


const Services = () => {

    const [services] = useServices()
    console.log(services);
  
 
    return (
        <div >
            
                <h1 className="text-center my-16 font-bold text-2xl">
                    Every tool you need to work with PDFs in one place
                    Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
                    <h3>Staging branch created</h3>
                    <h3>Development branch created</h3>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 my-4">
                    {
                        services?.map(service => (
                            <ServicesCard
                                key={service._id}
                                image={service.image}
                                name={service.name}
                                feature={service.feature}
                                benefit={service.benefit}>
                            </ServicesCard>)
                        )
                    }
                </div>
            
        </div>
    );
};

export default Services;