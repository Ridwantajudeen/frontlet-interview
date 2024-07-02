import React from 'react';


function Blogs(){
  return (
    <section className="blogs-resources">
      <h2>Blogs & Resources</h2>
      <div className="blogs-list">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="blog-item">
            <img src={`https://via.placeholder.com/150?text=Image+${item}`} alt={`Blog ${item}`} />
            <p>Top Ten Most Powerful Startups</p>
          </div>
        ))}
      </div>
      <button className="view-more">See More Blogs & Resources</button>
    </section>
  );
};

export default Blogs;
