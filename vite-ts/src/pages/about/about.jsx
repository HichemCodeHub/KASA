import App from '../../App';
import './about.css';
import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import BannerAbout from "../../components/bannerabout/bannerabout.jsx";
import collapsesData from '../../datas/collapses.json';
import Collapse from '../../components/collapse/collapse.jsx'; // Chemin d'importation ajusté

const About = () => {
  return (
    <div>
      {collapsesData.map((item) => (
        <Collapse key={item.id} title={item.title}>
          <p>{item.content}</p>
        </Collapse>
      ))}
    </div>
  );
};

export default About;