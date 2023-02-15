import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: "Кроссовки Puma X Aka Boku Future Rider", 
  price: 12999,
  imageUrl: "/img/sneakers/s1.jpg"
},
  {title: "Мужские Кроссовки Nike Air Max 270", 
  price: 15600,
  imageUrl: "/img/sneakers/s2.jpg"
},
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", 
  price: 17600,
  imageUrl: "/img/sneakers/s3.jpg"
},
  {title: "Мужские Кроссовки Under Armour Curry 8", 
  price: 23800,
  imageUrl: "/img/sneakers/s4.jpg"
},
  {title: "Мужские Кроссовки Nike Lebron XVIII Low", 
  price: 13800,
  imageUrl: "/img/sneakers/s5.jpg"
},
];

function App() {
  return (
    <div className="wrapper clear">
    <Drawer />
    <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <input placeholder="Поиск..." />
          </div>
        </div>  
        <div className="cardBox">
          {arr.map((obj) => (
              <Card title={obj.title}
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;