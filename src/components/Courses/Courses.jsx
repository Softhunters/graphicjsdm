import React from "react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Video Editing Course",
      content:
        "Get video editing course in Jaipur and learn to create professional quality videos, ideal for content creators, filmmakers and digital marketers.",
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/feature_1.svg",
    },
    {
      id: 2,
      name: "Graphic Designing course",
      content:
        "Take a graphic design course from Jaipur and learn to express your creativity. Explore graphic designing and make amazing masterpieces. ",
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/feature_2.svg",
    },
    {
      id: 3,
      name: "Animation Course",
      content:
        "Learn animation techniques for creating engaging visual content. Get to know about the principles like timing, spacing and movement in animation.",
      image:
        "https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/feature_3.svg",
    },
  ];
  return (
    <div className="m-5">
      <div className="text-center" style={{ marginTop: "70px" }}>
        <div className="about_title"># World Best Facilities Game</div>
        <div className="about_sub my-3">
          Bame Comes With Many Facilities Included <br></br> In Planet{" "}
          <span className="excel"> !</span>
        </div>
      </div>

      <div className="row my-5 courses_main">
        {courses.map((item) => {
          return (
            <>
              {(item.id + 1) % 2 == 0 ? (
                <>
                  <div className="col-md-6  empty_div my-3 py-4" key={item.id}>
                     
                  </div>
                  <div
                    className="col-md-6  fill_div  "
                    key={item.id}
                  >
                    <div className="course_card text-center ">
                      <img
                        src={item.image}
                        className=""
                        alt="..."
                        height={60}
                        width={60}
                      />
                      <div className="my-4 course_name">{item?.name} </div>
                      <p className="course_content">{item?.content}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                    <div
                    className="col-md-6  fill_div  "
                    key={item.id}
                  >
                    <div className="course_card text-center ">
                      <img
                        src={item.image}
                        className=""
                        alt="..."
                        height={60}
                        width={60}
                      />
                      <div className="my-4 course_name">{item?.name} </div>
                      <p className="course_content">{item?.content}</p>
                    </div>
                  </div>
                  <div className="col-md-6  empty_div my-3 py-4" key={item.id}>
                    
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>

      <div className="row mb-5"></div>
    </div>
  );
};

export default Courses;
