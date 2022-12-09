import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Swipper = ({data,image, mainBg}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={window.innerWidth < 768 ? 1 : 3}
            autoplay
            loop={true}
            pagination={{ clickable: true }}
            navigation
        >
            {
                data.map((data) => {
                    return (
                        <SwiperSlide key={data.id} className="main sticky mb-32 top-20 flex justify-center ">
                            <div className='sticky h-full'>
                                <img className='h-72 w-80 sticky' src={mainBg} alt={mainBg} />
                                <div className="absolute top-8 p-5 text-center flex flex-col justify-center">
                                    <span className='flex justify-center'><img src={data.image} alt={data.image} /></span>
                                    <h1 className='text-white font-bold uppercase text-lg mb-4 mt-4'>{data.header}</h1>
                                    <p className='text-white text-sm'>{data.descriptive}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default Swipper