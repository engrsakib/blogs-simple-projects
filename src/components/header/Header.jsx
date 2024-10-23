import React from 'react';
import profile from '../../../knowledge-cafe/images/boy1.png'

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100 border-b-2">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Sakib Knawladge cafe</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control max-sm:hidden">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={profile}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;