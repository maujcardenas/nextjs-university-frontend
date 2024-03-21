// export const menu = [
//   {
//     id: 1,
//     title: "main",
//     listItems: [
//       {
//         id: 1,
//         title: "Homepage",
//         url: "/",
//         icon: "home.svg",
//       },

import { menuData } from "./menuData";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((item) => (
        <div className="item flex flex-col gap-2.5 mb-5" key={item.id}>
          <span className="title uppercase text-xs text-softco">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link
              href={listItem.url}
              key={listItem.id}
              className="listItem flex gap-2.5 items-center p-1 hover:bg-softbgc rounded"
            >
              <img src={listItem.icon} alt="" />
              <span>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
