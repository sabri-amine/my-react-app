
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import Contact from './Contact'; 
import SignIn from './SignIn'; 
import DetailsPage from './details';
import Sabonner from './Sabonner';
import SignUp from './SignUp';


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sabonner" element={<Sabonner/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/details/:id" element={<DetailsPage/>} />
        </Routes>
      </div>
    </Router>


  );
}
