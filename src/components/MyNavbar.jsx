// import React from 'react'
// import { Link } from 'react-router-dom'

// const MyNavbar = () => {
//   return <>
//   <nav class="navbar navbar-expand-lg bg-light">
//     <div class="container-fluid">
//       <Link class="navbar-brand" to="/">Navbar</Link>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse"   data-bs-target="#navbarNavAltMarkup">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div class="navbar-nav">
//           <Link class="nav-link active" to="/">Home</Link>
//           <Link class="nav-link" to="/ux">ux</Link>
//           <Link class="nav-link" to="/about">About</Link>
//           <Link class="nav-link" to="/nasa">nasa</Link>
//         </div>
//       </div>
//     </div>
//   </nav>
//   </>
// }

// export default MyNavbar


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './../assets/css/navbar.css';

// const MyNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top rounded-circle">
//     <div className="container">
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNavAltMarkup"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav mx-auto">

//           <Link className="nav-link dot" to="/">
//             <div className="dot-content"></div>
//           </Link>

//           <Link class="nav-link dot" to="/ux">
//           <div className="dot-content"></div>
//           </Link>


//            <Link class="nav-link dot" to="/nasa">
//            <div className="dot-content"></div>
//            </Link> 
//             <Link class="nav-link dot" to="/about">
//             <div className="dot-content"></div>
//            </Link>

//           {/* Add similar dot links for other navigation items */}
//         </div>
//       </div>
//     </div>
//   </nav>
//   );
// };

// export default MyNavbar;


import React from 'react';
import './../assets/css/navbar.css'; // Import a custom CSS file for styling
// import { Svgwithpaths } from './../../public';
// import { Svgwithpaths } from '../../public';
import { Svgwithpaths } from './../../public/Svgwithpaths.svg';



const MyNavbar = () => {
  return (
<div className="container">
    <div className="row">
        <div className="col-md-5">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis aspernatur quos laudantium voluptates recusandae quas perspiciatis sit placeat. Voluptates nam itaque mollitia! Iusto exercitationem molestiae ut blanditiis voluptatum deserunt.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis aspernatur quos laudantium voluptates recusandae quas perspiciatis sit placeat. Voluptates nam itaque mollitia! Iusto exercitationem molestiae ut blanditiis voluptatum deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis aspernatur quos laudantium voluptates recusandae quas perspiciatis sit placeat. Voluptates nam itaque mollitia! Iusto exercitationem molestiae ut blanditiis voluptatum deserunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci perferendis aspernatur quos laudantium voluptates recusandae quas perspiciatis sit placeat. Voluptates nam itaque mollitia! Iusto exercitationem molestiae ut blanditiis voluptatum deserunt.
        </div>
        <div className='col-md-2'>
            <img src={Svgwithpaths} className="svg-container" style={{ width: '100px', height: '100px', fill: 'blue' }} alt="" />
        </div>
        <div className="col-md-5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt rerum autem beatae temporibus, fugit ut quidem aut e x commodi nulla quos. Ea assumenda provident deleniti tempora sed quibusdam dolore?
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sunt rerum autem beatae temporibus, fugit ut quidem aut e   x commodi nulla quos. Ea assumenda provident deleniti tempora sed quibusdam dolore?
        </div>
    </div>
</div>

  );
};

export default MyNavbar;
