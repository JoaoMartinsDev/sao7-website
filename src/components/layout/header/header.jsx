import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Logo } from "@/assets";
import { Menu, MenuItem } from "@/components/ui";
import Image from "next/image";
import "./header.scss";

function Header({handleHeaderClick}) {

  return (
    <header className="header">
      <div className="header__nav">
        <Menu>
          <MenuItem href="#">Merch</MenuItem>
          <MenuItem href="#">Agenda</MenuItem>
          <MenuItem href="#">Galeria</MenuItem>
        </Menu>
      </div>
      <div className="header__logo">
        <Image src={Logo} alt="Logo" className="logo" width={200} height={190} />
      </div>
      <div className="header__socials">
        <ul className="social-menu">
          <li className="social-menu-icon">
            <a
              href="https://www.facebook.com/sao7maseunbebo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="social-menu-icon">
            <a
              href="https://www.instagram.com/sao7maseunbebo/?locale=es_ES%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="social-menu-icon">
            <a
              href="https://www.youtube.com/@Sao7maseunbebo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
