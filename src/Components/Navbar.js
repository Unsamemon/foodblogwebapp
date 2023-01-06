import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}

          {/* // in order to get back all menu list we will set back menudata to menu
          which has all data */}
          {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
