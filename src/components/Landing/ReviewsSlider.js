import React, { useState, useEffect } from 'react';

const ReviewsSlider = () => {
    const reviews = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique quibusdam enim excepturi mollitia quaerat eum, ipsa vel quae alias a repellendus sapiente culpa beatae natus, quia voluptate. Nulla, amet.",
            author: "Jay Flake",
            location: "NG"
        },
        {
            text: "Exceptional service and outstanding results! The team went above and beyond my expectations. Their attention to detail and professional approach made all the difference.",
            author: "Sarah Chen",
            location: "US"
        },
        {
            text: "Working with this team has been a game-changer for our business. Their innovative solutions and dedicated support have helped us achieve remarkable growth.",
            author: "Mike Rodriguez",
            location: "UK"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    return (
        <div className="relative z-10 w-full max-w-max mx-auto translate-y-[90px]">
            <div className="relative  flex flex-col gap-4 bg-primaryBlue justify-center items-center w-full py-20 px-4">
                <div className="relative overflow-hidden w-full">
                    <div
                        className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        <p className="text-white max-w-[90%] md:max-w-[40%] mx-auto text-center text-base font-extralight tracking-[1px] leading-[35px]">
                            {reviews[currentIndex].text}
                        </p>
                        <h3 className="text-[19px] text-primaryRed text-center mt-4">
                            {reviews[currentIndex].author}, {reviews[currentIndex].location}
                        </h3>
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="p-2 text-white hover:text-red-500 transition-colors"
                    >
                        ←
                    </button>
                    <div className="flex gap-2">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? 'bg-red-500' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="p-2 text-white hover:text-red-500 transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSlider;