import './ItemImages.css';

export default function ItemImages({ imgOne, imgSecond, imgThird, imgFourth }) {
    return (
        <div className="item-images">
            <div className="img-box first-img"
                style={{
                    backgroundImage: `url(${imgOne || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="img-box second-img"
                style={{
                    backgroundImage: `url(${imgSecond || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="img-box third-img"
                style={{
                    backgroundImage: `url(${imgThird || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <div className="img-box fourth-img"
                style={{
                    backgroundImage: `url(${imgFourth || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'})`,
                    backgroundSize: 'cover',
                }}
            ></div>
        </div>
    )
}