import React from "react";
import Link from "next/link";
import * as headerStyles from "./header.module.css";
import logo from "../images/logo.png";
import Image from "next/image";
import { IoMdLock } from "react-icons/io";

const Header = () => {
  return (
    <nav className={"navbar navbar-expand-lg bg-dark-subtle"}>
    <div className="container-fluid">

      <Image src={logo} alt="logo retrobeats" className={headerStyles.logo} />

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Sobre Nós
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/sobre-nos">Nosso Time</a></li>
              <li><a class="dropdown-item" href="/sobre-nos/fale-conosco"	>Fale Conosco</a></li>
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>

        </ul>
        <IoMdLock />
          <div className={headerStyles.loginButton}> 
          &nbsp;  <Link href="/">Login</Link>&nbsp;&nbsp;&nbsp;
          </div>
      </div>
    </div>
  </nav>
  );
};

export default Header;
