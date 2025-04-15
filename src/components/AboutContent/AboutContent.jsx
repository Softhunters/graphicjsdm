// import React from "react";
// import "./AboutContent.css";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// const AboutContent = () => {
//   const exp = [
//     {
//       id: 1,
//       title: "Duis scelerisque nunc ac massa efficitur pulvinar.",
//       rating: 77,
//     },
//     {
//       id: 2,
//       title:
//         "Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.",
//       rating: 88,
//     },
//     {
//       id: 3,
//       title: "Aliquam nec sapien vitae dui dapibus blandit.",
//       rating: 19,
//     },
//     {
//       id: 4,
//       title: "Sed non ipsum ut mauris dictum ullamcorper ac at nibh",
//       rating: 19,
//     },
//   ];
//   return (
//       <div className="about-wrap3">

//     <div className="m-5">
//       <div className="row" style={{ marginTop: "50px" }}>
//         <div className="col-md-6 d-flex   ">
//           <div className="p-3">
//             <div className="about_title"># My Experience</div>
//             <div className="about_sub my-3">
//               My Gaming Experience are <br></br>6 Years
//             </div>
//             {exp.map((item) => {
//               return (
//                 <>
//                   <p className="d-flex align-items-center gap-2">
//                     <IoIosCheckmarkCircleOutline
//                       size={20}
//                       style={{ color: "var(--e--global-color-main)" }}
//                     />
//                     {item?.title}
//                   </p>
//                 </>
//               );
//             })}

//             <div>
//               <img
//                 src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-1.png"
//                 height="100%"
//                 width="100%"
//                 className="exp_img mt-3"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6    ">
//           <img
//             src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-2.png"
//              height="500px"
//             width="100%"
//             className="exp_img"
//           />

//           <div className="p-3" style={{ marginTop: "30px" }}>
//             <p className="d-flex align-items-center gap-2">
//               Gamers can join local gaming meetups, participate in gaming
//               events, or connect with like-minded individuals through online
//               forums and social media groups. Engaging with the community helps
//               build connections and creates opportunities for collaborative
//               gaming experiences.
//             </p>
//             <p className="d-flex align-items-center gap-2">
//               Storytelling is a crucial element in modern video game design,
//               creating immersive and engaging experiences. Games with compelling
//               narratives often resonate more with players, adding depth to the
//               overall gaming experience.
//             </p>
//           </div>
//         </div>
//         <div class="about-tag">
//           <div class="about-experience-tag">
//             <span class="circle-title-anime">
//               <span class="char1">2</span>
//               <span class="char2">4</span>
//               <span class="char3"> </span>
//               <span class="char4">Y</span>
//               <span class="char5">E</span>
//               <span class="char6">A</span>
//               <span class="char7">R</span>
//               <span class="char8">S</span>
//               <span class="char9"> </span>
//               <span class="char10">E</span>
//               <span class="char11">X</span>
//               <span class="char12">P</span>
//               <span class="char13">E</span>
//               <span class="char14">R</span>
//               <span class="char15">I</span>
//               <span class="char16">E</span>
//               <span class="char17">N</span>
//               <span class="char18">C</span>
//               <span class="char19">E</span>
//               <span class="char20"> </span>
//               <span class="char21">O</span>
//               <span class="char22">F</span>
//               <span class="char23"> </span>
//               <span class="char24">G</span>
//               <span class="char25">A</span>
//               <span class="char26">M</span>
//               <span class="char27">I</span>
//               <span class="char28">N</span>
//               <span class="char29">G</span>
//             </span>
//           </div>
//           <div class="about-tag-icon">
//             <img
//               decoding="async"
//               src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/logo-icon.svg"
//               alt="logo icon"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>
//   );
// };

// export default AboutContent;


// import React from "react";
// import "./AboutContent.css";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// const AboutContent = () => {
//   const exp = [
//     {
//       id: 1,
//       title: "Duis scelerisque nunc ac massa efficitur pulvinar.",
//     },
//     {
//       id: 2,
//       title:
//         "Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.",
//     },
//     {
//       id: 3,
//       title: "Aliquam nec sapien vitae dui dapibus blandit.",
//     },
//     {
//       id: 4,
//       title: "Sed non ipsum ut mauris dictum ullamcorper ac at nibh",
//     },
//   ];

//   const rotatingText = "24 YEARS EXPERIENCE OF GAMING • ";

//   return (
//     <div className="about-wrap3">
//       <div className="container p-5">
//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <div className="about_title"># My Experience</div>
//             <div className="about_sub my-3">My Gaming Experience is 6 Years</div>
//             {exp.map((item) => (
//               <p key={item.id} className="d-flex align-items-center gap-2">
//                 <IoIosCheckmarkCircleOutline
//                   size={20}
//                   style={{ color: "var(--e--global-color-main)" }}
//                 />
//                 {item.title}
//               </p>
//             ))}
//             <img
//               src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-1.png"
//               className="exp_img mt-3"
//               alt="Experience"
//             />
//           </div>

//           <div className="col-md-6 position-relative">
//             <img
//               src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-2.png"
//               className="exp_img"
//               alt="Gaming"
//             />

//             <div className="about-tag">
//               <div className="about-experience-tag">
//                 {[...rotatingText].map((char, index) => (
//                   <span
//                     key={index}
//                     style={{ transform: `rotate(${index * 10}deg)` }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </div>
//               <div className="about-tag-icon">
//                 <img
//                   src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/logo-icon.svg"
//                   alt="logo icon"
//                 />
//               </div>
//             </div>

//             <div className="p-3 mt-4">
//               <p>
//                 Gamers can join local gaming meetups, participate in gaming
//                 events, or connect with like-minded individuals through online
//                 forums and social media groups. Engaging with the community
//                 helps build connections and creates opportunities for
//                 collaborative gaming experiences.
//               </p>
//               <p>
//                 Storytelling is a crucial element in modern video game design,
//                 creating immersive and engaging experiences. Games with
//                 compelling narratives often resonate more with players, adding
//                 depth to the overall gaming experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContent;


import React from "react";
import "./AboutContent.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AboutContent = () => {
  const exp = [
    {
      id: 1,
      title: "Duis scelerisque nunc ac massa efficitur pulvinar.",
    },
    {
      id: 2,
      title:
        "Vivamus eget nisi scelerisque, iaculis risus vel, molestie risus.",
    },
    {
      id: 3,
      title: "Aliquam nec sapien vitae dui dapibus blandit.",
    },
    {
      id: 4,
      title: "Sed non ipsum ut mauris dictum ullamcorper ac at nibh",
    },
  ];

  const rotatingText = "24 YEARS EXPERIENCE OF GAMING • ";

  return (
    <div className="about-wrap3">
      <div className="container px-3 py-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12">
            <div className="about_title"># My Experience</div>
            <div className="about_sub my-3" style={{fontSize:"27px"}}>My Gaming Experience is 6 Years</div>
            {exp.map((item) => (
              <p key={item.id} className="d-flex align-items-center gap-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  style={{ color: "var(--e--global-color-main)" }}
                />
                {item.title}
              </p>
            ))}
            <img
              src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-1.png"
              className="exp_img my-3"
              alt="Experience"
            />
          </div>

          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 position-relative">
            <img
              src="https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/about3-2.png"
              className="exp_img "
              alt="Gaming"
            />

            {/* <div className="about-tag">
              <div className="about-experience-tag">
                {[...rotatingText].map((char, index) => (
                  <span
                    key={index}
                    style={{ transform: `rotate(${index * 10}deg)` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="about-tag-icon">
                <img
                  src="/img/logo.png"
                  alt="logo icon"
                  
                />
              </div>
            </div> */}

            <div className="p-3 mt-5"  >
              <p >
                Gamers can join local gaming meetups, participate in gaming
                events, or connect with like-minded individuals through online
                forums and social media groups. Engaging with the community
                helps build connections and creates opportunities for
                collaborative gaming experiences.
              </p>
              <p>
                Storytelling is a crucial element in modern video game design,
                creating immersive and engaging experiences. Games with
                compelling narratives often resonate more with players, adding
                depth to the overall gaming experience.
              </p>
            </div>
          </div>
          <div className="about-tag">
              <div className="about-experience-tag">
                {[...rotatingText].map((char, index) => (
                  <span
                    key={index}
                    style={{ transform: `rotate(${index * 10}deg)` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="about-tag-icon">
                <img
                  src="/img/logo_1.png"
                  alt="logo icon"
                 
                  
                />
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default AboutContent;
