import React from "react";
import "./Experience.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Experience = () => {

    const exp=[
        {
            id:1,
            title:"Adobe Photoshop",
            rating:77,
        },
        {
            id:2,
            title:"Adobe Premiere Pro",
            rating:88,
        },
        {
            id:3,
            title:"Adobe Illustrator",
            rating:19,
        }
    ]
  return (
    <div className="m-5">
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-6 d-flex   ">
          <div className="p-3">
            <div className="about_title"># My Experience</div>
            <div className="about_sub my-3">
            Business usage around the world
            {/* <br></br>6 Years */}
            </div>
            <p>
            Industry usage is a major part of learning any skill. Here is an understanding of the industrial usage of popular software

            </p>

            {exp.map((item)=>{
                return <>

            <div className=" my-3 ">
                {/* <ProgressBar now={80} /> */}
                <div className="d-flex exp_name">
                    <div className="">{item?.title}</div>
                    <div className="">{item?.rating} /100</div>
                </div>
                <div>

                <ProgressBar className="mt-3 progress_section"  now={item?.rating} />
                </div>
              


            </div>
                
                </>
            })}
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img
            // src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-1.png"
            src="/img/Experience.png"
            height="100%"
            width="100%"
            className="exp_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
