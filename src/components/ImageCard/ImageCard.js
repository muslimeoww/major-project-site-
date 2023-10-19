import './ImageCard.css';

export default function ImageCard({ text, position, img, width, height, col, row }) {
    return (
        <div className="image-card" style={{
            textAlign: position,
            width: width,
            height: height,
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            gridRow: row,
            gridColumn: col,
        }}>
            <p style={{ alignSelf: position }} >{text}</p>
        </div>
    )
}