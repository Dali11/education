import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Swipper = ({data,image, mainBg}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            autoplay={true}
            slidesPerView={window.innerWidth < 768 ? 1 : 4}
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            loop={true}
            navigation
        >
            {
                data.map((data) => {
                    return (
                        <SwiperSlide key={data.id} className="main laptop:mt-24 mb-32 w-full top-8 flex justify-center  ">     
                                <div className="bg-white w-full h-full flex flex-col justify-center">
                                    <div className="img w-full h-full"><span className='flex justify-center'><img className='w-full h-full' src={data.image} alt={data.image} /></span></div>
                                    <p className='text-black p-4 ml-10 w-60 text-center  text-lg'>{data.descriptive}</p>
                                       <hr />
                                    <p className='flex pt-4 justify-between'><span>{data.rating}</span> <span className='text-red-800 font-bold'>{data.amount}</span></p>
                                </div>
                        </SwiperSlide>
                    )
                })
            }
            ...
        </Swiper>
    );
};

export default Swipper