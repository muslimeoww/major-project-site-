import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';
import { useProducts } from '../../store/useProducts';

export default function Header({ title, subtitle, button }) {
    const [currentKatalog, setCurrentKatalog] = useState(false)
    const [currentContacts, setCurrentContacts] = useState(false)
    const [currentBusket, setCurrentBusket] = useState(false)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const getProducts = useProducts((state) => state.getProducts)
    const busket = useProducts((state) => state.busket)


    const mobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const onClick = () => {
        setCurrentBusket(false)
        setCurrentContacts(false)
        setCurrentKatalog(false)
    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header>
            <div className="header_top">
                <h1>Дом Сантехники</h1>
                <p>+375 (44) 888 88 88 <br /><br /> +375 (44) 888 88 88</p>
            </div>
            <nav>
                <Link to={'/'}>
                    <img onClick={onClick} src="./assets/icon_logo_200x123.png" alt="" />
                </Link>
                <div className="nav-right">
                    <ul>
                        <li onClick={() => {
                            setCurrentKatalog(true)
                            setCurrentBusket(false)
                            setCurrentContacts(false)
                        }} id={currentKatalog && 'currentPage'}><Link to={'/katalog'}>Каталог</Link></li>
                        <li onClick={() => {
                            setCurrentKatalog(false)
                            setCurrentBusket(false)
                            setCurrentContacts(true)
                        }} id={currentContacts && 'currentPage'}><Link to={'/contacts'}>Контакты</Link></li>
                        <li onClick={() => {
                            setCurrentKatalog(false)
                            setCurrentBusket(true)
                            setCurrentContacts(false)
                        }} id={currentBusket && 'currentPage'}>
                            <Link style={{ display: 'flex', alignItems: 'center' }} to={'/busket'}>
                                Корзина
                                {busket.length > 0 ? <div className="baslet-items_circle">
                                    {busket.length}
                                </div> : <></>}
                            </Link>
                        </li>
                    </ul>
                    <div className="search-bar">
                        <input type="text" placeholder='Поиск' name="search" id="search" />
                        <label htmlFor="search"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <circle cx="4" cy="4" r="3.5" stroke="#2C3035" />
                            <path d="M6.5 7L10 11" stroke="#2C3035" />
                        </svg></label>
                    </div>
                </div>
                {isMobileMenuOpen ? <AiOutlineClose onClick={mobileMenu} className='mobile-menu' /> : <HiMenu onClick={mobileMenu} className='mobile-menu' />}
            </nav>
            {isMobileMenuOpen &&
                <div className="mobile-menu_open">
                    <div className="search-bar">
                        <input style={{ color: 'white' }} type="text" placeholder='Поиск' name="search" id="search" />
                        <label htmlFor="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                <circle cx="4" cy="4" r="3.5" stroke="white" />
                                <path d="M6.5 7L10 11" stroke="white" />
                            </svg>                        </label>
                    </div>
                    <ul>
                        <li onClick={() => {
                            setCurrentKatalog(true)
                            setCurrentBusket(false)
                            setCurrentContacts(false)
                        }} id={currentKatalog && 'currentPage'}><Link to={'/katalog'}>Каталог</Link></li>
                        <li onClick={() => {
                            setCurrentKatalog(false)
                            setCurrentBusket(false)
                            setCurrentContacts(true)
                        }} id={currentContacts && 'currentPage'}><Link to={'/contacts'}>Контакты</Link></li>
                        <li onClick={() => {
                            setCurrentKatalog(false)
                            setCurrentBusket(true)
                            setCurrentContacts(false)
                        }} id={currentBusket && 'currentPage'}><Link style={{ display: 'flex', alignItems: 'center' }} to={'/busket'}>
                                Корзина
                                {busket.length > 0 ? <div className="baslet-items_circle">
                                    {busket.length}
                                </div> : <></>}
                            </Link>
                        </li>
                    </ul>
                </div>
            }
            {isMobileMenuOpen ||
                <>
                    <div className="header_title">
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                    </div>
                    {button &&
                        <div className="header_end">
                            <Link onClick={() => { setCurrentKatalog(true) }} to={'/katalog'} ><Button value={'Смотреть'} ></Button></Link>
                            <div className="current-slide">
                            </div>
                        </div>}
                </>
            }
        </header>
    )
}