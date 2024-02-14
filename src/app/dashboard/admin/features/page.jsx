"use client"
import Pagination from '@/app/components/ui/dashboard/Pagination/Pagination';
import Search from '@/app/components/ui/dashboard/Search/Search';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';
import loading from "../../../../../public/loading.json"
import useServices from '@/hooks/useServices';
import Swal from 'sweetalert2';


const AdminFeaturesPage = () => {
    const [services, isLoading, isError, error] = useServices();
    console.log(services);
    const handleDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    if (isLoading) {
        return (
          <div className="w-1/2 flex mx-auto">
            <Lottie animationData={loading}></Lottie>
          </div>
        );
      }
      if (isError) {
        console.log(error);
      }
    return (
        <div className='w-full pt-5 bg-customDarkBlue text-white'>
            <div className='flex justify-between items-center mx-5'>
                <Search placeholder="Search for a Features..." />
                <Link href="/dashboard/admin/features/addFeature">
                <button className="btn border-none bg-[#5d57c9] text-white font-medium">Add New</button>
            </Link>
            </div>

            <table className='w-full mx-5 mt-5'>
                <thead>
                <tr>
                <td>Image</td>
                <td>Title</td>
                <td>Feature Type</td>
                <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {services.map(service => (
                        <tr key={service._id}>
                             <td className='flex items-center mt-1 '>
                        <Image className='rounded-xl mr-3 ' src={service.image} width={80} height={80} alt='UserImg'/>
                        
                    </td>
                    <td>{service.name}</td>
                    <td>{service.convTypes}</td>
                    <td>
                        <Link href={`/services/${service._id}`} className='p-3 m-1 btn-outline text-white border rounded-xl'>View</Link>
                        <button onClick={handleDelete} className='btn border-none bg-red-600 text-white font-medium'>Delete</button>
                    </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
            <Pagination />

        </div>
    );
};

export default AdminFeaturesPage;