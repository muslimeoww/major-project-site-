import './ShowerSection.css';
import Button from '../Button/Button';

export default function ShowerSection() {
    return (
        <section className="shower">
            <h1>Душевые кабины</h1>
            <div className="shower-content">
                <div>
                    <p>Душевые кабины и ограждения со скидками, душевное
                        начало дня</p>
                    <Button value={'Смотреть'} color={'#2C3035'} backgroundColor={'#AFBCD1'} />
                </div>
                <div className="shower-img"></div>
            </div>
        </section>
    )
}