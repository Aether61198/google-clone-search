import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/image", text: "📷 Images" },
  { url: "/news", text: "📰 News" },
  { url: "/videos", text: "🎥 Videos" },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          key={index}
          to={url}
          className={({ isActive }) =>
            "m-4 mb-0 pb-2" +
            (isActive ? " text-yellow-500 border-b-2 border-yellow-500" : "")
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
