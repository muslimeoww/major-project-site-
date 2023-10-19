import { useState } from 'react'
import './Category.css'
import { AiOutlineDown } from "react-icons/ai"
import ImageCard from '../ImageCard/ImageCard'

export default function Category() {
    const [isOpenCategory, setIsOpenCategory] = useState(false)
    const onClick = () => {
        setIsOpenCategory(!isOpenCategory)
    }
    return (
        <section className="category">
            <h1>Категории товаров</h1>
            <div className="category_cards">
                <div className="cards-preview">
                    <ImageCard
                        text={'Смесители и душ'}
                        position={'flex-start'}
                        img={'./assets/groupcardtwo.svg'}
                        row={'1/3'}
                        col={'1/2'}
                    />
                    <ImageCard
                        text={'Плитка'}
                        position={'flex-end'}
                        img={'./assets/groupcardthgree.svg'}
                    />
                    <ImageCard
                        text={'Полотенце сушители'}
                        position={'flex-end'}
                        img={'./assets/groupcardfour.svg'}
                        row={'1/3'}
                        col={'3/4'}
                    />
                    <ImageCard
                        text={'Ванны и комплектующие'}
                        position={'flex-end'}
                        img={'./assets/groupcardsixc.svg'}
                    />
                    <ImageCard
                        text={'Унитазы и бидэ'}
                        position={'flex-start'}
                        img={'./assets/groupcardfive.svg'}
                    />
                    <ImageCard
                        text={'Раковины и столешницы'}
                        position={'flex-end'}
                        img={'./assets/groupcardone.svg'}
                        row={'3/4'}
                        col={'2/4'}
                    />
                </div>
                {isOpenCategory &&
                    <div className="cards-loaded">
                        <ImageCard
                            position={'flex-start'}
                            text={'Душевые кабины и ограждения'}
                            img={'./assets/group-open-two.png'}
                            row={'1/3'}
                        />
                        <ImageCard
                            position={'flex-end'}
                            text={'Мебель для ванной'}
                            img={'./assets/group-open-five.svg'}
                        />
                        <ImageCard
                            position={'flex-end'}
                            text={'Для общественных мест'}
                            img={'./assets/group-open-three.svg'}
                            row={'1/3'}
                            col={'3/4'}
                        />
                        <ImageCard
                            position={'flex-end'}
                            text={'Водонагреватели'}
                            img={'./assets/group-open-four.svg'}
                        />
                        <ImageCard
                            position={'flex-start'}
                            text={'Аксесуары'}
                            img={'./assets/group-open-one.png'}
                        />
                        <ImageCard
                            position={'flex-end'}
                            text={'Кухонные мойки и фильтры'}
                            img={'./assets/group-open-eight.svg'}
                            col={'2/4'}
                            row={'3/5'}
                        />
                        <ImageCard
                            position={'flex-start'}
                            text={'Отопление и климпт'}
                            img={'./assets/group-open-seven.svg'}
                        />
                        <ImageCard
                            position={'flex-end'}
                            text='Инсталляции, кнопки смыва'
                            img={'assets/group-open-six.svg'}
                            col={'2/4'}
                            row={'4/5'}
                        />
                    </div>
                }
                {isOpenCategory ? <span onClick={onClick}>Скрыть</span> : <span onClick={onClick}>Ещё <AiOutlineDown color='#2C3035' /></span>}
            </div>
        </section>
    )
}