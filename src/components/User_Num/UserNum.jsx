import React from 'react'
import CountUp from "react-countup";
import "./UserNum.css"

const UserNum = () => {
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

    const logoList=[
        {
            id:1,
            img :"/img/logo.png",
        },
        {
            id:2,
            img :"/img/logo.png",
        },
        {
            id:3,
            img :"/img/logo.png",
        },
        {
            id:4,
            img :"/img/logo.png",
        },
        {
            id:5,
            img :"/img/logo.png",
        },
        {
            id:6,
            img :"/img/logo.png",
        },
        {
            id:7,
            img :"/img/logo.png",
        },
        {
            id:8,
            img :"/img/logo.png",
        },

    ]
  return (
    <>
    <div className="row m-5 user_num_box">
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
    
{/* <div className="row m-5 " style={{paddingLeft:"100px",paddingRight:"100px"}}>
    {logoList.map((item)=>{
        return<>
            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 logo_container'>
                <div className='logo_box'>
                <img src={item.img} alt="logo" height={50} width={50}/>

                </div>

            </div>
        </>
    })}
 
</div> */}
<div className="row m-5 dashoard_main"  >
  {logoList.map((item) => {
    return (
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-6 logo_container">
        <div className="logo_box">
          <img src={item.img} alt="logo" className="logo_img" />
        </div>
      </div>
    );
  })}
</div>

    </>


  
  )
}

export default UserNum
