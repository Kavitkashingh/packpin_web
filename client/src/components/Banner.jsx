import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img from '../assets/Banner 2.png'
import imga from '../assets/banner 6.png'
import imgs from '../assets/banner 10.png'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Margin } from '@mui/icons-material';
import aa from '../assets/banner 5.png'
import aaa from '../assets/banner 8.png'
import as from '../assets/banner 9.png'
import sa from '../assets/banner 10.png'

const Banner = () => {
    // const { categories } = useSelector(state => state.home); // Ensure this matches your actual state structure
    const { categorys } = useSelector(state => state.home)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
 
    const responsiveCarousel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='bg-slate-300 w-[100%] xs:mx-0  flex flex-wrap justify-center items-center'>
          <div className='w-[100%] relative '>
           <div className='flex flex-row p-5 xs:p-0 gap-2 xs:flex-col'>
            <div className='w-[20%] xs:w-full'>
                <div className='bg-white h-[100%] xs:h-auto  xs:mb-4  rounded-xl xs:rounded-none overflow-hidden'>
                    <div className='flex items-center xs:hidden justify-between p-4 font-bold text-md cursor-pointer'>
                        <span className='text-xl'>CATEGORIES</span>
                        <MdOutlineKeyboardArrowDown className='text-2xl'/>
                    </div>
                    <hr />
                    <ul className='overflow-auto xs:flex'>
                    {categorys?.map((category, index) => (
                            <div key={index} className='capitalize flex xs:flex-col xs:justify-center  xs:items-center xs:w-35 xs:h-30 p-2 rounded-full'>
                                <img src={category.image} alt={category.name} className='w-10 h-10 rounded-full border border-2' />
                                <Link to={`/products?category=${category.name}`} className='capitalize block text-xs px-2'>{category.name}</Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-[80%] xs:mt-[-13px] xs:w-[95%] overflow-hidden mx-auto'>
            {/* ml-[-9px] md:w-3/4 lg:w-4/5 */}
                {/* Carousel and Slider */}
                <div className='mb-3 rounded-md '>
                    <Carousel autoPlay={true} className='rounded-md' infinite={true} arrows={false} showDots={true} responsive={responsiveCarousel}>
                        {[aa, aaa, as, sa].map((num, index) => (
                            <Link key={index} to='#'>
                                {/* <img src={`http://localhost:3000/images/banner/${num}.jpg`} alt="" className='object-cover rounded-md' /> */}
                                <img src={num} alt="" className='object-cover rounded-md' />
                            </Link>
                        ))}
                    </Carousel>
                </div>
                <div className="xs:w-[102%] overflow-hidden xs:pb-2 mt-[-2px]">
                    <Slider {...settings} className="gap-2" >
                        {[ imga,imga,imga].map((image, index) => (
                            <div key={index} className='' >
                                <img src={image} alt="Slide" className=' gap-2 overflow-hidden xs:w-[96%] w-[99%] object-cover rounded-md'/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Banner;