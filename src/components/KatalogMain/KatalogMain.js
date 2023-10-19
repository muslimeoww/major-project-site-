import './KatalogMain.css'
import Button from '../Button/Button';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import KatalogItem from '../KatalogItem/KatalogItem';
import { useProducts } from '../../store/useProducts';

const MIN = 100
const MAX = 100000

export default function KatalogMain({ navigate }) {
    const [isOpenPlumbFilter, setIsOpenPlumbFilter] = useState(false)
    const [isOpenBrendFilter, setIsOpenBrendFilter] = useState(false)
    const [isOpenTypeFilter, setIsOpenTypeFilter] = useState(false)
    const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false)

    const [values, setValues] = useState([MIN, MAX])
    const [mobileFilter, setMobileFilter] = useState(false)
    const products = useProducts((state) => state.products)
    return (
        <div className="katalog-main">
            <h1>Категории товаров</h1>
            <div className="mobile-filter_button">
                <Button onClick={() => { setMobileFilter(!mobileFilter) }} id="mobile-filter_button" value={'Фильтры'} backgroundColor={'#AFBCD1'} color={'#2C3035'} />
            </div>
            <div className="katalog-content">
                <div className="katalog-filter">
                    <div className="filter-list">
                        <div className="filter-type">
                            <span onClick={() => { setIsOpenPlumbFilter(!isOpenPlumbFilter) }} >Сантехника
                                <svg style={{ transform: `rotate(${isOpenPlumbFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg>
                            </span>
                            {isOpenPlumbFilter &&
                                <ul className="plumg-filter">
                                    <li>Ванны</li>
                                    <li>Раковины</li>
                                    <li>Унитазы</li>
                                    <li>Души</li>
                                </ul>
                            }
                        </div>
                        <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenBrendFilter(!isOpenBrendFilter) }}
                            >Бренд <svg style={{ transform: `rotate(${isOpenBrendFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg></span>
                            {isOpenBrendFilter &&
                                <ul className="brend-filter">
                                    <li>Roca</li>
                                    <li>Roca 34x65</li>
                                </ul>
                            }
                        </div>
                        <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenTypeFilter(!isOpenTypeFilter) }}
                            >Тип <svg style={{ transform: `rotate(${isOpenTypeFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg></span>
                            {isOpenTypeFilter &&
                                <ul className="type-filter">
                                    <li>С бачком</li>
                                    <li>Подвесные</li>
                                </ul>
                            }
                        </div>
                        <div className="filter-type">
                            <span
                                onClick={() => { setIsOpenPriceFilter(!isOpenPriceFilter) }}
                            >Цена <svg style={{ transform: `rotate(${isOpenPriceFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                    <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                </svg>
                            </span>

                            {isOpenPriceFilter &&
                                <>
                                    <div className="price-range">
                                        <div className="min-price">{values[0]}p</div>
                                        <div className="max-price">{values[1]}p</div>
                                    </div>
                                    <Slider
                                        handleStyle={{ backgroundColor: "#30496F", opacity: '1', border: 'none' }}
                                        trackStyle={{ backgroundColor: '#30496F' }}
                                        activeDotStyle={{ border: 'none' }}
                                        onChange={setValues}
                                        value={values}
                                        range
                                        defaultValue={[MIN, MAX]}
                                        min={MIN}
                                        max={MAX}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>
                {mobileFilter &&
                    <div className="katalog-filter-mobile">
                        <div className="filter-list">
                            <svg onClick={() => { setMobileFilter(false) }} xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                <line x1="11.9045" y1="0.337011" x2="1.71722" y2="11.502" stroke="#2C3035" />
                                <line y1="-0.5" x2="15.1142" y2="-0.5" transform="matrix(0.724343 0.68944 0.68944 -0.724343 1 0.204712)" stroke="#2C3035" />
                            </svg>
                            <div className="filter-type">
                                <span onClick={() => { setIsOpenPlumbFilter(!isOpenPlumbFilter) }} >Сантехника
                                    <svg style={{ transform: `rotate(${isOpenPlumbFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg>
                                </span>
                                {isOpenPlumbFilter &&
                                    <ul className="plumg-filter">
                                        <li>Ванны</li>
                                        <li>Раковины</li>
                                        <li>Унитазы</li>
                                        <li>Души</li>
                                    </ul>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenBrendFilter(!isOpenBrendFilter) }}
                                >Бренд <svg style={{ transform: `rotate(${isOpenBrendFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg></span>
                                {isOpenBrendFilter &&
                                    <ul className="brend-filter">
                                        <li>Roca</li>
                                        <li>Roca 34x65</li>
                                    </ul>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenTypeFilter(!isOpenTypeFilter) }}
                                >Тип <svg style={{ transform: `rotate(${isOpenTypeFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg></span>
                                {isOpenTypeFilter &&
                                    <ul className="type-filter">
                                        <li>С бачком</li>
                                        <li>Подвесные</li>
                                    </ul>
                                }
                            </div>
                            <div className="filter-type">
                                <span
                                    onClick={() => { setIsOpenPriceFilter(!isOpenPriceFilter) }}
                                >Цена <svg style={{ transform: `rotate(${isOpenPriceFilter ? '-180deg' : '0deg'})`, transitionDuration: '0.2s' }} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                        <path d="M1 1.07251L5.15472 4.88384C5.5617 5.25718 6.22848 5.26492 6.64401 4.90112L10.8988 1.17609" stroke="#2C3035" />
                                    </svg>
                                </span>

                                {isOpenPriceFilter &&
                                    <>
                                        <div className="price-range">
                                            <div className="min-price">{values[0]}p</div>
                                            <div className="max-price">{values[1]}p</div>
                                        </div>
                                        <Slider
                                            handleStyle={{ backgroundColor: "#30496F", opacity: '1', border: 'none' }}
                                            trackStyle={{ backgroundColor: '#30496F' }}
                                            activeDotStyle={{ border: 'none' }}
                                            onChange={setValues}
                                            value={values}
                                            range
                                            defaultValue={[MIN, MAX]}
                                            min={MIN}
                                            max={MAX}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="katalog-list">
                    {products.map((el) => {
                        return (
                            <KatalogItem
                                key={el._id}
                                item={el}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}