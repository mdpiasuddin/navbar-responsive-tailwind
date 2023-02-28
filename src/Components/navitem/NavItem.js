import React from "react";

const NavItem = (props) => {
  const { name } = props.name;
  return (
    <>
      <li className="mx-5">{name}</li>
    </>
  );
};

export default NavItem;
