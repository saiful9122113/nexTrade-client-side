import React, { useEffect, useState } from "react";

const Slider = ({ imageArray }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === imageArray.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [imageArray]);

  return (
    <div className="flex justify-center mt-8">
      <div
        className="carousel"
        style={{
          width: "500px",
          height: "300px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px", // Optional for rounded edges
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional for shadow
        }}
      >
        {imageArray.map((image, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "opacity 1s ease-in-out",
              opacity: currentSlide === index ? 1 : 0, // Show only the current slide
            }}
          >
            <img
              src={image}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                right: "0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transform: "translateY(-50%)",
                padding: "0 10px",
              }}
            >
              <button
                className="btn btn-circle"
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === 0 ? imageArray.length - 1 : currentSlide - 1
                  )
                }
              >
                ❮
              </button>
              <button
                className="btn btn-circle"
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === imageArray.length - 1 ? 0 : currentSlide + 1
                  )
                }
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
