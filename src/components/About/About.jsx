import React from "react";
import "./About.css";
import CountUp from "react-countup";

const About = () => {
  const about = [
    {
      id: 1,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about_feature_2_1.svg",
      title: "Great Tournament",
      description:
        "Keep users informed about the gaming industry with news articles.",
    },
    {
      id: 2,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about_feature_2_3.svg",
      title: "Live Streaming",
      description:
        "Keep users informed about the gaming industry with news articles.",
    },
    {
      id: 3,
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about_feature_2_2.svg",
      title: "Gaming News",
      description:
        "Keep users informed about the gaming industry with news articles.",
    },
  ];

  const user_num = [
    {
      id: 1,
      num: 2616,
      text: "our daily game user",
    },
    {
      id: 2,
      num: 2472,
      text: "Game Downloads",
    },
    {
      id: 3,
      num: 1078,
      text: "Game Launched",
    },
    {
      id: 4,
      num: 1602,
      text: "Game Project Delivered",
    },
  ];

  return (
    <div className="m-5">
      <div className="text-center" style={{ marginTop: "150px" }}>
        <div className="about_title">
          # Welcome to The eSports & Gaming Site
        </div>
        <div className="about_sub my-3">
          Forging Legends in the Gaming Universe
        </div>
      </div>

      <div className="row my-5">
        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
          <img
            src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about2-1.png"
            alt="About Us"
            height={500}
            style={{ width: "100%", height: "auto" }}
            className="about_img"
          />
        </div>
        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
          {about.map((item) => (
            <div key={item.id} className="d-flex justify-content-center">
              <div className="about_card my-3">
                <div>
                  <img
                    src={item.image}
                    alt="About Us"
                    style={{ width: "50px", height: "auto" }}
                  />
                </div>
                <div>
                  <div className="about_name ">{item.title}</div>
                  <div className="about_desc">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row mb-5  ">
        {user_num.map((item) => (
          <div
            key={item.id}
            className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
          >
            <div className="about_sub number_text">
              <CountUp
                start={0}
                end={item.num}
                duration={2.5}
                separator=","
                suffix="+"
              />
            </div>
            <div className="about_num_title number_content">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
