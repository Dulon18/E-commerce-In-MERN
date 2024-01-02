// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars
const layouts = ({children}) => {
     return (
          <div className=''>
               <div className='containe mx-auto '>
                    <div className="navbar bg-zinc-800">
                         <div className="navbar-start flex-1">
                              <a className="btn btn-ghost text-2xl text-white">HD<span className='text-red-600 uppercase'>Mert</span> </a>
                         </div>
                         <div className="navbar-center form-control">
                              <input type="text" placeholder="Search" className="input input-bordered  md:w-auto" />
                         </div>
                         <div className="navbar-end flex-none">
                              <div className="dropdown dropdown-end">
                                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator bg-white">
                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                             <span className="badge badge-sm indicator-item badge-warning">8</span>
                                        </div>
                                   </div>
                                   <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                        <div className="card-body">
                                             <span className="font-bold text-lg">8 Items</span>
                                             <span className="text-info">Subtotal: $999</span>
                                             <div className="card-actions">
                                                  <button className="btn btn-primary btn-block">View cart</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="dropdown dropdown-end">
                                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                             <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                   </div>
                                   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                             <a className="justify-between">
                                                  Profile
                                                  <span className="badge">New</span>
                                             </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="navbar bg-lime-700 font-bold text-white">
                         <div className="navbar-start"></div>
                         <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1 text-lg uppercase">
                                   <li><a>Home</a></li>
                                   <li><a href="">Products</a></li>
                                   <li><a href="">About</a></li>
                                   <li><a>Blog</a></li>
                                   <li><a>Contact</a></li>
                              </ul>
                         </div>
                         <div className="navbar-end"></div>
                    </div>

               </div>
          </div>
     );
};

export default layouts;