function App() {
  return (
    <div className="wrapper clear">


    <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>

        <div className="cartItem">
          <img src="/img/sneakers/s1.jpg" alt="Sneakers" />
          <div>
            <p>Кроссовки Puma X Aka Boku Future Rider</p>
            <b>12 999грн</b>
          </div>
          <img src="/img/sneakers/btn-remove.svg" alt="" />
        </div>
      </div>
    </div>
      <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
              <img width={40} height={40} src="/img/logo.png" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кросовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/Group.svg" alt="" />
              <span>0грн.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/Union.svg" alt="" />
            </li>
          </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex flex-wrap justify-between">
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/s2.jpg" alt="Sneakers" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/s3.jpg" alt="Sneakers" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/s11.jpg" alt="Sneakers" />
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

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/s5.jpg" alt="Sneakers" />
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
        </div>

      </div>
    </div>
  );
}

export default App;
