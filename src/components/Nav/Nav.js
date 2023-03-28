import { NavLink } from "react-router-dom";

/* Component ---------------------------------------------------------------- */

export function Nav({ className }) {
  const list = [
    { id: "kinderInfo", to: "/map", text: "어린이집 정보" },
    { id: "community", to: "/community", text: "커뮤니티" },
    { id: "aboutUs", to: "/aboutus", text: "about Us" },
  ];

  return (
    <nav>
      <ul className={className}>
        {list.map((item) => {
          return <Nav.Item key={item.id} item={item} />;
        })}
      </ul>
    </nav>
  );
}

Nav.Item = function NavItem({ item }) {
  return (
    <li>
      <NavLink to={item.to}>{item.text}</NavLink>
    </li>
  );
};
