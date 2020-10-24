import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import Link from "next/link";
import { device } from "../consts/theme";

const MenuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/articles",
    title: "Articles",
  },
  {
    path: "/account",
    title: "Accouunt",
  },
];

const ListLink = (props) => (
  <li>
    <Link href={props.to}>{props.children}</Link>
  </li>
);
interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  setIsActiveMenu: Function;
  isActiveMenu: boolean;
}
const Navigation: React.FC<Props> = ({ setIsActiveMenu, isActiveMenu }) => {
  const [toggleMenu, setToggleMenu] = useState(isActiveMenu);
  function handleToggleClick() {
    // this.setState(state => ({
    //   showMenu: !state.showMenu,
    // }))
    console.log("navid toggleMenu=", toggleMenu);
    setIsActiveMenu(!toggleMenu);
    setToggleMenu(!toggleMenu);
  }

  const listMenuItems = MenuItems.map((menuItem, index) => (
    <ListLink key={index} to={menuItem.path}>
      {menuItem.title}
    </ListLink>
  ));
  return (
    // <Container className={this.state.showMenu ? ' cross-nav' : ''}>
    <Container className={"site-navigation"}>
      <button
        onClick={handleToggleClick}
        className={"menu-trigger" + (toggleMenu ? " is-active" : "")}
      >
        <div className="icon-menu-line">
          <RiMenu3Line />
        </div>
        <div className="icon-menu-close">
          <RiCloseLine />
        </div>
      </button>

      <ul>{listMenuItems}</ul>
    </Container>
    // </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  width: max-content;
  color: red;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline-block;
    margin-left: 20px;
  }
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  a[aria-current="page"] {
    color: rgba(255, 255, 255, 1);
  }
  .menu-trigger {
    display: none;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    padding: 0;
    cursor: pointer;
  }

  @media ${device.tablet} {
    .menu-trigger,
    .icon-menu-line {
      display: flex;
    }

    .icon-menu-close {
      display: none;
    }
    .menu-trigger.is-active {
      .icon-menu-line {
        display: none;
      }
      .icon-menu-close {
        display: flex;
      }
    }
    .menu-trigger.is-active + ul {
      display: block;
    }
    ul {
      display: none;
      position: fixed;
      top: 3rem;
      right: 0;
      width: 100vw;
      height: max-content;
      border-radius: 0 0 12px 12px;
      overflow: hidden;
      text-align: center;
      background-color: var(--secondary-color-dark);
      height: 100%;
    }
    ul li {
      display: block;
      margin-left: 0;
    }
    a {
      display: block;
      padding: 20px;
    }
    a:hover {
      background-color: var(--secondary-color-normal);
    }
  }
`;