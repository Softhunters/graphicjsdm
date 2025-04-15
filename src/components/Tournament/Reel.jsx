// import React from 'react'
// import "./Reel.css"

// const Reel = () => {
    
//   const qualities=[
//     {id:1, name:"ACTION - PACKED"},
//     {id:2, name:"MIND - BENDING"},
//     {id:3, name:"COLLECTION OG GAMES"},
//      {id:4, name:"GAMING SPANING"},
//   ] 
 
//   return (
//     <div className='px-5'>

//     <div className='row my-5  '>
//         {qualities.map((item)=>{
//             return<>
//             <div className='col-4 p-3 d-flex  gap-5 align-items-center '>
//                 <div>

//                  <img src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/star.png"  height="30px" width="30px" />
//                 </div>
//                 <span className='reel_name'>

//                 {item.name}
//                 </span>

//             </div>
            
//             </>
//         })}
      
//     </div>

//     </div>
//   )
// }

// export default Reel



// import React from 'react';
// import './Reel.css';

// const Reel = () => {
//   const qualities = [
//     { id: 1, name: "ACTION - PACKED" },
//     { id: 2, name: "MIND - BENDING" },
//     { id: 3, name: "COLLECTION OG GAMES" },
//     { id: 4, name: "GAMING SPANING" },
//   ];

//   return (
//     <div className="reel-wrapper">
//       <div className="reel">
//         {qualities.concat(qualities).map((item) => (
//           <div key={item.id} className="reel-item gap-3">
//             <img
//               src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/star.png"
//               alt="icon"
//               height="30px"
//               width="30px"
//             />
//             <span className="reel-name">{item.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reel;


import React from 'react';
import './Reel.css';

const Reel = () => {
  const qualities = [
    { id: 1, name: "ACTION - PACKED" },
    { id: 2, name: "MIND - BENDING" },
    { id: 3, name: "COLLECTION OG GAMES" },
    { id: 4, name: "GAMING SPANING" },
    { id: 5, name: "ACTION - PACKED" },
    { id: 6, name: "MIND - BENDING" },
  ];

  return (

    <div className='my-5'>

    <div className="reel-wrapper ">
      <div className="reel">
        {qualities.concat(qualities).map((item) => (
          <div key={item.id} className="reel-item gap-3">
            <img
              src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/star.png"
              alt="icon"
              height="30px"
              width="30px"
            />
            <span className="reel-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Reel;
