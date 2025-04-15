import React from "react";
import "../About/About.css";
import CountUp from "react-countup";
// import "./Home_About.css"

const Home_About = () => {
  const about = [
    {
      id: 1,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/about_feature_1.svg",
      title: " Hands-on training",
      description:
        "No BS, real-world projects, real-world workflows, real tools; create an amazing portfolio as you learn.",
    },
    {
      id: 2,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/about_feature_2.svg",
      title: "Expert Mentors",
      description:
        "Get guidance from expert editors and graphic designers who have worked on Top-grade content that includes digital media and films. ",
    },
    {
      id: 3,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/about_feature_3.svg",
      title: "Affordable and flexible",
      description:
        "Best quality training without breaking the bank, get continuous support and expert QnA.",
    },
  ];

  return (
    <div className="mx-5" style={{ marginTop: "130px" }}>
      <div className="row my-5">
        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12 d-flex justify-content-center">
          <img
            src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/about1-1.png"
            alt="About Us"
            // height={500}
            style={{ width: "90%", height: "auto" }}
            className="about_img"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
          {/* <div className="d-flex justify-content-between align-items-center gap-3 home_about_content">
            <img
              src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about1-2.png"
              height="100px"
              width="100px"
            ></img>

            <div>
              <div className="about_title"># About Our Gaming Site</div>
              <div className="about_sub my-4">
                Forging Legends in the Gaming Universe
              </div>
            </div>
          </div> */}
           
            <div className="text-center ">
              <div className="about_title mt-4"># About Our Gaming Site</div>
              <div className="about_sub my-4">
              Why Choose Us?
              </div>
            </div>
          
          {about.map((item) => (
            <div key={item.id} className="d-flex justify-content-center my-3">
              <div className="d-flex justify-content-between align-items-center gap-3 home_about_content">
                <img src={item.image} alt="About Us" height={100} width={100} />
                <div className="">
                  <div className="homi_title">{item.title}</div>
                  <div className="homi_desc">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_About;
