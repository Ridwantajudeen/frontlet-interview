import React from 'react';


const areas = [
  {
    title: '01',
    description: 'Business Support & Incubation',
  },
  {
    title: '02',
    description: 'On-Demand & As-A-Service',
  },
  {
    title: '03',
    description: 'Marketplace & Crowdsourcing',
  },
  {
    title: '04',
    description: 'Aggregation & Shared Economy',
  },
  {
    title: '05',
    description: 'Decentralized Economy & Digital Assets',
  },
];

function Focus(){
  return (
    <div className="focus">
      <h2>Our Area of Focus</h2>
      <p>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
      <div className="focus-areas">
        {areas.map((area, index) => (
          <div className="focus-area" key={index}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Focus;
