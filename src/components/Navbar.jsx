import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import logoImg from "../image/logo.png"
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>


const Navbar = () => {
  return (
    <div>
      <header className='ddd'>
        <NavLink to="/">
          <img className="" src={logoImg} />
        </NavLink>
        <i class="menu-toggle-btn fas fa-bars"></i>
        <nav class="navigation-menu">
          <ul>
            <li>
              <NavLink to="/" className="mekha"  >Главная</NavLink>

            </li>
            <li>
              <NavLink to="/products" className="mekha"  >Услуги</NavLink>
            </li>
            <li>
              <NavLink to="/client" className="mekha" >Частные клиентам</NavLink>

            </li>
            <li>
              <NavLink to="/lits" className="mekha"  >Юридическим лицам</NavLink>

            </li>
            <li>
              <NavLink to="/tender" className="mekha" >Teндер</NavLink>

            </li>
          </ul>
        </nav>
        <div class="language">
          <a class="lang active lab  mekha " href="#">
            ТОҶ/
          </a>
          <a class="lang lab    mekha    " href="#">
            РУС/
          </a>
          <a class="lang lab    mekha     " href="#">
            ENG
          </a>
        </div>
      </header>

      {/* <nav class="navbar navbar-expand-lg bg-blue" style={{ background: " #def1fd" }} >
        <div class="container">
          <a class="navbar-brand" href="#">
            <NavLink to="/" className="mekha"  > <a href="">
              <img className="" src={logoImg} />
            </a></NavLink>

          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <NavLink to="/" className="mekha"  >Главная</NavLink>

                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <NavLink to="/products" className="mekha"  >Услуги</NavLink>

                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <NavLink to="/client" className="mekha" >Частные клиентам</NavLink>

                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <NavLink to="/lits" className="mekha"  >Юридическим лицам</NavLink>

                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <NavLink to="/tender" className="mekha" >Teндер</NavLink>

                  </a>
                </li>
              </ul>
            </div>


            <div class="language">
              <a class="lang active lab  mekha " href="#">
                ТОҶ/
              </a>
              <a class="lang lab  mekha " href="#">
                РУС/
              </a>
              <a class="lang lab   mekha" href="#">
                ENG
              </a>
            </div>

          </div>

        </div>
      </nav> */}


    </div>
  )

}




export default Navbar