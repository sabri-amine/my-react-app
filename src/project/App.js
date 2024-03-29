import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import SignIn from './SignIn'; 
import DetailsPage from './details';
import Sabonner from './Sabonner';
import SignUp from './SignUp';
import AuthData from './AuthData';
import { Provider } from 'react-redux';
import store from '../redux/store';
export default function App() {
  return (
      <Provider store={store} > 
        {/* /** Redux provider ** */}
    <Router>
      <div>
        <Routes>
          <Route path="/Cards" element={<Cards />} />
          <Route path="/sabonner" element={<Sabonner/>} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AuthData" element={<AuthData />} />
          <Route path="/details/:id" element={<DetailsPage/>} />
        </Routes>
      </div>
    </Router>

</Provider>
  );
}