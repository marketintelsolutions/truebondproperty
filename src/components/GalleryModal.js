import { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsX } from 'react-icons/bs';


const GalleryModal = ({ images, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen) return null;

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="relative w-full max-w-max mx-4" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-primaryRed transition-colors z-10"
                >
                    <BsX size={32} />
                </button>

                <div className="relative aspect-video">
                    <img
                        src={images[currentImageIndex]}
                        alt={`Property image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                    />

                    <button
                        onClick={handlePrev}
                        className="absolute -left-10 top-1/2 -translate-y-1/2 text-white hover:text-primaryRed transition-colors"
                    >
                        <BsChevronLeft size={32} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute -right-10 top-1/2 -translate-y-1/2 text-white hover:text-primaryRed transition-colors"
                    >
                        <BsChevronRight size={32} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${currentImageIndex === index ? 'bg-primaryRed' : 'bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryModal