'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import  { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
import Image from 'next/image';
import React from 'react'
import styles from './ProductSlider.module.scss'
SwiperCore.use([Navigation,Thumbs]);

const ProductSlider:React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <div className={styles.productSlider}>
      <Swiper
        slidesPerView={1}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        className={styles.swiperMain}
        autoplay={{delay: 3000}}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" /> 
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://place-hold.it/600x600" width={600} height={600} alt="Product Image" />   
        </SwiperSlide>
      </Swiper>
      <Swiper 
          direction={'vertical'} 
          className={styles.swiperThumbs} 
          navigation={true} loop={true} 
          onSwiper={setThumbsSwiper} 
          slidesPerView={4} 
          spaceBetween={25}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >    
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/80x80" alt="" width={80} height={80}/>
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductSlider