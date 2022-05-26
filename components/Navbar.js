import React from 'react'
import NavStyles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <div className='menu-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container">
                    <a className="navbar-brand" href="#"><h1>LOGO</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`active ${NavStyles.nav_link}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={NavStyles.nav_link} href="/about">About</a>
                            </li>
                            <li className={`nav-item dropdown ${NavStyles.dropdown_mega}`}>
                                <a className={`dropdown-toggle ${NavStyles.nav_link}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    Catagory
                                </a>
                                <div className={`dropdown-menu shadow ${NavStyles.center}`}>
                                    <div className='mega-content px-md-4'>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-lg-3 col-sm-6 py-4 px-xl-5 px-4'>
                                                    <h5>Services</h5>
                                                    <div className='list-group'>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6 py-4 px-xl-5 px-4'>
                                                    <h5>Services</h5>
                                                    <div className='list-group'>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6 py-4 px-xl-5 px-4'>
                                                    <h5>Services</h5>
                                                    <div className='list-group'>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-sm-6 py-4 px-xl-5 px-4'>
                                                    <h5>Services</h5>
                                                    <div className='list-group'>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                        <a className={NavStyles.list_group_item} href='#'>Accomodations</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    )
}
