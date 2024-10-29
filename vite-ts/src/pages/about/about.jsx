import App from '../../App';
import './about.css';
import React from 'react';
import BannerAbout from "../../components/bannerabout/bannerabout.jsx";
import collapsesData from '../../datas/collapses.json';
import Collapse from '../../components/collapse/collapse.jsx';

const About = () => {
  return (
    

    
    <div>

      <BannerAbout />

      <div> 
        {collapsesData.map((item) => (
          <Collapse key={item.id} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
      ))}
      </div>


    </div>


  );
};

export default About;