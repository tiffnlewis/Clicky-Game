import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
        return (
          <div className="App">
            <header className="header">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Tiffany's Clicky Game</a>
                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Restart the game!</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>
            );
          }
export default Navbar;