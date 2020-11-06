 import React from 'react';
 import '../../App.css';
 import Mainpage from '../Mainpage';
 import AddCompany from '../pages/AddCompany';
import Footer from '../pages/Footer';
 function Home() {
     return (
         <>
             <Mainpage />
             <AddCompany/>
             <Footer/>

         </>
     );
 }

 export default Home;