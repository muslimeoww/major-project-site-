import Button from '../Button/Button';
import './ContactsSection.css';

export default function ContactsSection() {
    return (
        <section className="contacts">
            <div className="contacts-form">
                <div className="contacts-form_left">
                    <div className="card">
                        <h1>Контакты</h1>
                        <p>+375 44 888 88 88</p>
                        <p>+375 44 888 88 88</p>
                        <p>г. Минск Lorem Lorem Lorem</p>
                    </div>
                </div>
                <div className="contacts-form_right">
                    <h1>Сообщение</h1>
                    <form action="submit" className="contacts-submit_form">
                        <input placeholder='Имя и фамилия' type="text" name="nameSurname" id="name-surname" />
                        <input placeholder='Телефон' type="number" name="phone" id="phone" />
                        <input placeholder='Email' type="email" name="email" id="email" />
                        <textarea style={{ marginBottom: '16px' }} placeholder='Сообщение' name="comment" id="comment" cols="30" rows="4"></textarea>
                        <Button value={'Отправить'} color={'#2C3035'} backgroundColor={'#AFBCD1'} />
                    </form>
                </div>
            </div>
            <div className="contacts-map">
                <div style={{ width: '100%', height: '100%', filter: 'grayscale(1)', position: 'relative', overflow: 'hidden' }}>
                    <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Москва</a>
                    <a href="https://yandex.ru/maps/213/moscow/house/novoslobodskaya_ulitsa_20s4/Z04Ycw5pSUQEQFtvfXt5c39rZA==/?ll=37.601548%2C55.782922&mode=search&sctx=ZAAAAAgAEAAaKAoSCfm%2BuFSllTtAEZEr9SwI80pAEhIJgIKLFTWYxj8RizbHuU24rz8iBgABAgMEBSgKOABA%2BJ4GSAFiKmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfZHNzbWoCYnmdAc3MTD2gAQCoAQC9AY5%2FVbHCARkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6gEA8gEA%2BAEAggIq0J3QvtCy0L7RgdC70L7QsdC%2B0LTRgdC60LDRjyDRg9C70LjRhtCwIDIzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.600620%2C55.780964&sspn=0.010550%2C0.004875&text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2023&utm_medium=mapframe&utm_source=maps&z=17.24"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Новослободская улица 23 — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.601548%2C55.782922&mode=search&sctx=ZAAAAAgAEAAaKAoSCfm%2BuFSllTtAEZEr9SwI80pAEhIJgIKLFTWYxj8RizbHuU24rz8iBgABAgMEBSgKOABA%2BJ4GSAFiKmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfZHNzbWoCYnmdAc3MTD2gAQCoAQC9AY5%2FVbHCARkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6gEA8gEA%2BAEAggIq0J3QvtCy0L7RgdC70L7QsdC%2B0LTRgdC60LDRjyDRg9C70LjRhtCwIDIzigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=37.600620%2C55.780964&sspn=0.010550%2C0.004875&text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2023&whatshere%5Bpoint%5D=37.598956%2C55.782384&whatshere%5Bzoom%5D=17&z=17.24" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe></div>

            </div>
        </section >
    )
}