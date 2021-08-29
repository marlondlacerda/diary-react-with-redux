import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 my-5 text-center">
        <Link to="/diary-react-with-redux/adicionar" className="btn btn-outline-dark">
          Adicionar Contato!
        </Link>
      </div>
      <div className="col-md-6 mx-auto">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </div>
  </div>
);

export default Home;
