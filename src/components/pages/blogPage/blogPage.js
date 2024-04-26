import { useState, useEffect } from "react";
import { useSearchParams, Link } from 'react-router-dom';

import Services from "../../helpers/services";

import Skeleton from "@mui/material/Skeleton";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './blogPage.scss';

const BlogPage = () => {

    const newServices = new Services();

    const [arr, setArr] = useState([]);
    const [arrPerformer, setArrPerformer] = useState([]);

    const [loading, setLoading] = useState(true);


    const [activeIndex, setActiveIndex] = useState(null);
    const [activeDescr, setActiveDescr] = useState('');

    useEffect(() => {
        newServices.getListQA()
            .then(res => {
                setArr(res);
                setActiveIndex(1);
                setActiveDescr(res[0].description);
            })       
    }, [])

    useEffect(() => {
        newServices.getListPerformers(activeIndex)
                    .then(res => {
                        setArrPerformer(res);
                    })
                    .then(() => {
                        setTimeout(() => {
                            setLoading(false)
                        }, 2000)
                    }) 
    }, [activeIndex])

    const setSlidesItem = (arr) => {
        return arr.map((item) => {
            return (
                <SwiperSlide 
                    data-quest-value={item.value} 
                    key={item.value} 
                    onClick={(e) => {
                        setActiveIndex(item.value);
                        setActiveDescr(item.description);
                        setLoading(true);
                    }}
                    className={activeIndex === item.value ? 'active' : ''}
                >
                    {item.text}
                </SwiperSlide>
            )
        })
    }

    const setPerformerCard = (arr) => {
        return arr.map(({id, first_name, last_name, benefits, description}, index) => {
            return (
                <Link to={`/blog/${id}?serviceId=${activeIndex}`}>
                
                    <div className="d-flex performer-card">
                        <div className="performer__img">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <div className="performer__name d-flex">
                                {first_name} {last_name}
                            </div>
                            <div className="performer__benefits">
                                {benefits}
                            </div>
                            <div className="performer__descr">
                                {description}
                            </div>
                            <button 
                                type='submit' 
                                className="button button__main"
                                disabled={''}>
                                <div className="inner">Choose a service</div>
                            </button>
                        </div>
                    </div>
                
                </Link>
            )
        })
    }

    return (
        <section className="blog-page d-flex f-column">
            <div>
                <div className="blog-page__title-block w-50">
                    <h1><span className="title-block__title">Careers marketplace</span> - a mentor matching service to help solve your problem </h1>
                    <span>Select a task and get a list of helpers guaranteed to help you solve it </span>
                    <a href="#" className="title-block__link">Choose a mentor</a>
                </div>
            </div>

            <div className="blog-page__catalog-list">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => {}}
                    >
                    {
                        setSlidesItem(arr)
                    }
                </Swiper>
                <div className="catalog-list__content">
                    <div className="catalog-list__description">
                        {activeDescr}
                    </div>
                    <div className="catalog-list__mentors">
                        <div className="mentors__summary">There are {arrPerformer.length} mentors for you</div>
                        {
                            loading ?  (
                                Array.from({length: 3}, (_, i) => (
                                    <Skeleton key={i} variant="rounded" width={900} height={353} />
                                ))
                            ) : 
                            setPerformerCard(arrPerformer)
                        }
                    </div>
                </div>
            </div>

        </section>
    )

}

export default BlogPage;