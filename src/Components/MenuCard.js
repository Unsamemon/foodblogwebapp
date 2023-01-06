import React from "react";

const MenuCard = ({ menuData }) => {
  console.log(menuData);
  //as we passed menudata to menucard compo now to access it here we will pass it as parametr
  //to render data of all ids we will use map method
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, title, category, desc, img } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{title}</span>
                  <h2 className="card-title">{title}</h2>
                  <span className="card-desc subtle">{desc}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={img} alt="images" className="card-media" />
                <span className="card-tag subtle">order now</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
