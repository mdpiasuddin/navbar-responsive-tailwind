import React, { useState } from "react";
import NavItem from "../navitem/NavItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {};
  const navit = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Service",
    },
    {
      id: 4,
      name: "FAQ",
    },
  ];
  return (
    <div className="relative">
      <span>
        {open ? (
          <XMarkIcon
            onClick={handleOpen}
            className="h-10 w-8 text-white-500   absolute top-0 left-10"
          />
        ) : (
          <Bars3Icon
            onClick={handleOpen}
            className="h-10 w-8 text-white-500   absolute top-0 left-10"
          />
        )}
      </span>

      <ul className="md:flex justify-center bg-gray-500 p-5">
        {navit.map((i) => (
          <NavItem id={i.id} name={i}></NavItem>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
