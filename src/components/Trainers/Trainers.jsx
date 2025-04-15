import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trainers2.css";

const Trainers = () => {
  const TrainersList = [
    {
      id: 1,
      img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-5.png",
    },
    {
      id: 2,
      img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-3-1.png",
    },
    {
      id: 3,
      img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-1-1.png",
    },
    {
      id: 4,
      img: "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/1-2-1.png",
    },
  ];

   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="m-5">
      <div className="text-center" style={{ marginTop: "50px" }}>
        <div className="about_title"># Top World Class Gamer</div>
        <div className="about_sub my-3">Let’s See Our Pro Player</div>
      </div>

      <div className="container Trainers-container">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2500}
          infinite={true}
          arrows={true}
          centerMode={true}
          className="carousel-container py-5  "
        >
          {TrainersList.map((item) => (
            <div key={item.id} className="carousel-item ">
              
              <div class="th-team team-card" style={{marginTop:item?.id%2==0?"100px":"0px"}}>
                <div class="team-card-corner team-card-corner1"></div>
                <div class="team-card-corner team-card-corner2"></div>
                <div class="team-card-corner team-card-corner3"></div>
                <div class="team-card-corner team-card-corner4"></div>
                <div class="img-wrap"  >
                  <div class="team-img p-3">
                    <img
                      decoding="async"
                      src={item?.img}
                      alt="1 3 1"
                      style={{height:"300px"}}
                    />
                  </div>
                  <img
                    decoding="async"
                    src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/game-logo1-3.png"
                    alt="game logo1 3"
                    class="game-logo"
                  />
                </div>
                <div class="team-card-content">
                  <h3 class="box-title">
                    <a href="https://wordpress.themeholy.com/bame/players-details/">
                      Mac Marsh
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Trainers;
