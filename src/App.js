import Card from './components/Card'

function App() {
  return (
    <div className="wrapper clear">


    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

        <div className="items">
          <div className="cartItem d-flex alig-center mb-20">
            
            <div style={{ backgroundImage: 'url(/img/sneakers/s1.jpg)' }} className="cartItemImg">

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>12 999грн</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>


          <div className="cartItem d-flex alig-center mb-20">
            
            <div style={{ backgroundImage: 'url(/img/sneakers/s1.jpg)' }} className="cartItemImg">

            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Кроссовки Puma X Aka Boku Future Rider</p>
              <b>12 999грн</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>


        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498грн.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074грн.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="Arrow" /></button>
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
        
        <div className="cardBox">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


        </div>
      </div>
    </div>
  );
}

export default App;
