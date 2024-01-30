import Image from 'next/image';
import React from 'react';
import Container from '../utils/Container';

const AboutUsPage = () => {
    const team = [
        {
            "id": 1,
            "name": "~Shohaib Hossain(Shouvo)",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/321447756_1246803672540560_7403018106211127108_n.jpg?_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeG-Wu-ljkMEAakVFJmhKhDJBQeW7hU-C_4FB5buFT4L_mD4xD7DUqs3-yypTUu_pwdYG3QaWAaXXdPdg98noBqU&_nc_ohc=7F142tUkgpcAX8mhArf&_nc_ht=scontent.fdac22-1.fna&oh=00_AfD17piC_DUMLnIurgC6c62uaX7Pn9AKnNdpXz0GTDLJeg&oe=65B81DC9"
        },
        {
            "id": 2,
            "name": "Md Ekramul Hassan",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/373291732_1452670648638036_7616004694142423303_n.jpg?_nc_cat=105&cb=99be929b-b574a898&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFXC8tNXmmPc_uOieifrE5wMR_4QTTVFzIxH_hBNNUXMppw6uaBamCcF_HnBwT3hV8TnMVafL8BpIoorMtUnVka&_nc_ohc=bEib6YH-TBAAX-WCgKa&_nc_ht=scontent.fdac22-1.fna&oh=00_AfCpnl8sO0KA0wDjrQSEfTamVUwqfzEGMrIozcSmbY_L5A&oe=65B8336C"
        },
        {
            "id": 3,
            "name": "M Jahid hasan",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-1/413832899_1534317040662692_2541134493142373072_n.jpg?stp=c9.0.294.294a_dst-jpg_p320x320&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEC531fnPMYICXD1vwDrnoiDZFgciX7yVgNkWByJfvJWLY5zjjZUYcRnldbkJi4jTPLYPOs4kvoNVuPzYSy_eyi&_nc_ohc=96G7ufhn9Q8AX_R8aPB&_nc_ht=scontent.fdac22-1.fna&oh=00_AfB_d72asBArt-_wqjj6KPikjrQ-vvZK1ncWswiv9H_HVQ&oe=65B8A2FE"
        },
        {
            "id": 4,
            "name": "Rezwan ",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-1/394466036_200233456437947_5169117441317808806_n.jpg?stp=c102.102.820.820a_dst-jpg_s100x100&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEBnwGRUD4-vbqyCaQqZnjLgZBkyHoBJWiBkGTIegElaLLOT1ilrp-lJ3pgRQHqQ-QiYrwilpTndpI-40xHLfx6&_nc_ohc=M0K5pphjo9EAX9m5dKb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac22-1.fna&oh=00_AfCnSAg1NZp3UrjzySoPmyql-yejGzNybNi6CVMvlVyWCQ&oe=65B75F45"
        },
        {
            "id": 5,
            "name": "Md.Sagor Hossain",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/320544589_909732453803058_4514920903869606836_n.jpg?_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHcdoAHZ2OG-_GYnMAnbDNp4cyfFOU8SWXhzJ8U5TxJZa5U9btkba-5lwpjl1vSQgCVr7lxxLUso-lL_KihxXC9&_nc_ohc=sdCFxBr1gDgAX_ARL8n&_nc_ht=scontent.fdac22-1.fna&oh=00_AfB_QcnZm4Iho8KStPB2CCG-GQjkRAb4ODOqgx21fqcDfw&oe=65B75369"
        },
        {
            "id": 6,
            "name": "Priom Gupta",
            "work": "web Developer",
            "img": "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-1/416359973_3513715388941627_3843587137816629574_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&cb=99be929b-b574a898&ccb=1-7&_nc_sid=11e7ab&_nc_eui2=AeFH8r43tEp86zsDPPsXH2X8Sp4S0O7dlhlKnhLQ7t2WGbnsNnWEOrbUXa3bnqBgxmXU13ZmzAONV2f172K8bUSY&_nc_ohc=5CGcCl7cpB8AX9J8fei&_nc_ht=scontent.fdac22-1.fna&oh=00_AfBgbyFebush_1rACCukLSFWKCpYBMZooTsVdpOfZfHUpg&oe=65B8EA74"
        },
    ]
    return (
        <div className=' '>
            <Container>

                <div className='banner1 h-[550px] md:h-[500px] text-white p-7'>
                    <h2 className='md:text-5xl text-3xl text-center mt-6 font-bold'>About Us</h2>
                    <h3 className='md:text-3xl text-xl text-center font-medium mt-4 mb-10 text-customOrange'>Our Story</h3>

                    <p className='text-xl text-center'>Discover the enchanting world of PDFMagic, where we&apos;ve set out on a mission to redefine your PDF experience. Our goal is to provide you with intuitive tools that allow you to play, edit, and customize your PDFs effortlessly. With PDFMagic, your documents take center stage as we empower you to transform them with ease. Welcome to a new era of PDF magic – where every edit, every customization, feels like pure enchantment
                        Welcome to a new era of PDF magic – where every edit, every customization, feels like pure enchantment
                    </p>

                </div>
                <div>
                    <h1 className='text-center font-bold text-4xl my-5'>The Team</h1>
                    <p className='text-center my-3 font-xl'>We are few, yet a passionate few who enjoy creating solutions to help millions of people around the world with their document needs
                    </p>
                    <div className='grid md:grid-cols-3 gap-3'>
                        {
                            team.map(man => (
                                <div key={man.id} className='flex justify-center items-center my-8'>
                                    <div>
                                        <Image
                                            src={man.img}
                                            alt="man"
                                            height={200}
                                            width={200}
                                            className='rounded-2xl'
                                        >
                                        </Image>
                                        <p className='font-bold '>{man.name}</p>
                                        <p>{man.work}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUsPage;