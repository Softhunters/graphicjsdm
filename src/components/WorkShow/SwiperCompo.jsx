// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "./SwiperCompo.css";
// import { FiArrowUpRight } from "react-icons/fi";
// import { IoCloseSharp } from "react-icons/io5";
// // import SwiperCore, { Pagination } from "swiper";

// const SwiperCompo = () => {
//   // const videoRefs = useRef([]);
//     const workList = [
//     { id: 1, video: "/video/nature.mp4" },
//     { id: 2, video: "/video/second_video.mp4" },
//     { id: 3, video: "/video/third_video.mp4" },
//     { id: 4, video: "/video/nature.mp4" },
//     { id: 5, video: "/video/second_video.mp4" },
//     { id: 6, video: "/video/third_video.mp4" },
//     { id: 7, video: "/video/nature.mp4" },
//     { id: 8, video: "/video/second_video.mp4" },
//   ];

//   // console.log(videoRef?.current?.swiper-slide-active)

//   const [modalVideo, setModalVideo] = useState(null);

//   const handleSlideChange = (swiper) => {
//     videoRefs.current.forEach((video, index) => {
//       if (!video) return;
//       if (index === swiper.activeIndex) {
//         video.play().catch((e) => console.log("Autoplay failed", e));
//       } else {
//         video.pause();
//         video.currentTime = 0; // Optional: reset video
//       }
//     });
//   };

//   return (
//     <div className="container workshow-container">
//       <Swiper
//         modules={[Autoplay, EffectCoverflow, Navigation]}
//         effect={"coverflow"}
//         // grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         spaceBetween={10}
//         loop={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 150,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         navigation
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1200: { slidesPerView: 3 },
//         }}

//         // onSlideChange={handleSlideChange}
//         className="mySwiper py-5"
//       >
//         {workList.map((item) => (

           
//           <SwiperSlide key={item.id}>
//             {console.log(item)}
//             <div className="th-video ">
//               <video
//               // ref={(el) => (videoRefs.current[index] = el)}
//               //  ref={videoRef}
//                 // {"swipe-slide-active"?"autoplay":"pause"}
//                 // autoplay
//                 loop
//                 muted
//                 playsInline
//                 style={{ width: "100%", maxWidth: "600px" }}
//                 className="workshow-img"
//               >
//                 <source src={item.video} type="video/mp4" />
//               </video>
//               <a
//                 className="play-btn popup-image style3"
//                 onClick={() => setModalVideo(item.video)}
//               >
//                 <FiArrowUpRight className="arrow" />
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {modalVideo && (
//         <div
//           className="video-modal-overlay"
//           onClick={() => setModalVideo(null)}
//           style={{ cursor: "pointer" }}
//         >
//           <div className="video-modal" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setModalVideo(null)}>
//               <IoCloseSharp size={24} />
//             </button>
//             <video controls autoPlay loop playsInline className="modal-video-player mb-5">
//               <source src={modalVideo} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SwiperCompo;


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./swiper_new.css";
import { IoCloseSharp } from "react-icons/io5";

const SwiperCompo = () => {
  const workList = [
    { id: 1, video: "https://youtu.be/qvYosaHxNbs" },
    { id: 2, video: "https://youtu.be/LinWJsangs4" },
    { id: 3, video: "https://youtu.be/LinWJsangs4" },
    { id: 4, video: "https://youtu.be/T6RJUzuVq4w" },
    { id: 5, video: "https://youtu.be/YHcX_nuyQPc" },
    { id: 6, video: "https://youtu.be/5UhnQ2h-5BY" },
  ];

  const [modalVideo, setModalVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper: Extract YouTube video ID
  const extractYouTubeID = (url) => {
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&\/\s]+)/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="container workshow-container">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Navigation]}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="mySwiper py-5"
      >
        {workList.map((item, index) => {
          const videoId = extractYouTubeID(item.video);
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={item.id}>
              <div className="th-video" onClick={() => setModalVideo(videoId)}>
                {isActive ? (
                  <>
                  <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title="Active Slide Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <div className="play-btn">
                  <FiArrowUpRight className="arrow" />
                  {/* <span className="arrow">▶</span> */}
                </div>
                  
                  </>
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt="YouTube thumbnail"
                    className="workshow-img"
                    style={{ width: "100%", cursor: "pointer",objectFit:"cover" }}
                  />
                )}

 
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Modal Popup */}
      {modalVideo && (
        <div
          className="video-modal-overlay"
          onClick={() => setModalVideo(null)}
        >
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalVideo(null)}>
              <IoCloseSharp size={24} />
            </button>
            <div className="modal-video-player mb-5">
              <iframe
                width="100%"
                 height="100%"
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Modal Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwiperCompo;
