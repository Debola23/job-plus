import { Multistep } from '../Multistep/Multistep';
import Styles from './Barner1.module.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const Barner1 = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); 
  const slidesRef = useRef([]);

  const loadingStates = [
    { text: "Easy Registration" },
    { text: "Larger access to jobs" },
    { text: "Smooth user exprience" },
    { text: "No uncessary ads" },
    { text: "Speedy connection" },
  ];

  const slides = [
    {
      bg: 'bg-blue-500',
      title: 'Job Plus 101 will guide you through the basics of our platform.',
      text: 'Learn how to get started on Job plus',
      button: {
        text: 'Explore Job plus',
        to: '/explore',
        color: 'blue',
      },
    },
    {
      bg: 'bg-green-500',
      title: 'Access to numerous jobs in any field',
      text: 'Create account to access more features.',
      button: {
        text: 'Login',
        to: '/login',
        color: 'green',
      },
    },
    {
      bg: 'bg-purple-600',
      title: 'Top job search website.',
      text: 'Start your journey with us',
      button: {
        text: 'Why use us',
        to: '#',
        color: 'purple',
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const totalSlides = slidesRef.current.length;
      slidesRef.current.forEach((slide) => {
        slide.classList.add('opacity-0');
        slide.classList.remove('opacity-100');
        slide.style.zIndex = '0';
      });

      const nextIndex = (activeSlide + 1) % totalSlides;
      setActiveSlide(nextIndex); 

      const currentSlide = slidesRef.current[nextIndex];
      if (currentSlide) {
        currentSlide.classList.remove('opacity-0');
        currentSlide.classList.add('opacity-100');
        currentSlide.style.zIndex = '10';
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, loadingStates.length * 2000 + 1000);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  return (
    <>
      <div>
        <div className={`${Styles.Barner1} flex justify-center items-center mt-[3rem]`}>
          <div className="relative w-full max-w-3xl overflow-hidden h-[400px] sm:h-[170px] md:h-[230px] " id={Styles.banBox}>
            <div id="slides" className="relative w-full h-full">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  ref={(el) => (slidesRef.current[i] = el)}
                  className={`slide absolute w-full h-full flex flex-col justify-center items-center text-white transition-opacity duration-1000 ${
                  i === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  } ${slide.bg}`}
                >
                  <h2 className="mb-3" id={Styles.banT1}>{slide.title}</h2>
                  <p className="mb-6 text-lg" id={Styles.banT2}>{slide.text}</p>

                  {i === activeSlide && i === 2 ? (
                    <button
                      onClick={() => setShowLoader(true)}
                      className={`bg-white text-${slide.button.color}-500 px-4 py-2 rounded shadow hover:bg-gray-100 transition`}
                      id={Styles.slideText}
                    >
                      {slide.button.text}
                    </button>
                  ) : (
                    <Link
                      to={slide.button.to}
                      className={`bg-white text-${slide.button.color}-500 px-4 py-2 rounded shadow hover:bg-gray-100 transition text-decoration-none`}
                    >
                      {slide.button.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showLoader && (
        <div className="fixed inset-0 z-[9998] backdrop-blur-sm bg-black/30 flex justify-center items-center">
          <Multistep
            loading={true}
            loadingStates={loadingStates}
            duration={2000}
            loop={true}
            onClose={() => setShowLoader(false)}
          />
        </div>
      )}
    </>
  );
};
