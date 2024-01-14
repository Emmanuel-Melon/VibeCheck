import { Icon } from "@repo/ui/Icon";
import Link from "next/link";

const links = [
  {
    id: 1,
    href: "/",
    title: "Home",
    icon: "heroicons:bell-alert"
  },
  {
    id: 2,
    href: "/vibes",
    title: "Explore",
    icon: "heroicons:globe-asia-australia"
  },
  {
    id: 3,
    href: "/chats",
    title: "Chats",
    icon: "heroicons:chat-bubble-oval-left-ellipsis"
  },
  {
    id: 4,
    href: "/settings",
    title: "Settings",
    icon: "heroicons:adjustments-horizontal"
  },
];

const NavbarLink = ({ link }) => {
  return (
    <Link href={link.href} className="btn btn-sm btn-ghost w-full">
      <Icon icon={link.icon} /> {link.title}
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Icon icon="heroicons:bars-3-bottom-left-solid" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {links.map((link) => (
              <NavbarLink link={link} key={link.id} />
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/">
          VibeCheck
        </a>
      </div>
      <div className="navbar-end">
        <Link href="/profile" className="btn btn-ghost btn-circle">
          <Icon icon="heroicons:user" />
        </Link>
        <Link href="/notifications" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Icon icon="heroicons:bell-alert" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </Link>
      </div>
    </div>
  );
};
