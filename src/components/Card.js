// 1:40:33 / 2:29:14

function Card() {
    return (
<div className="card">
    <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
    </div>
    <img width={133} height={112} src="/img/sneakers/s1.jpg" alt="Sneakers" />
    <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
    <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 грн</b>
        </div>
        <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
    </div>
</div>
    );
}

export default Card;