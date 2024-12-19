import React from "react";
import "./index.css"

// Sample pizza data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// Menu component (currently empty)
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length
  return (
    <main className="menu">

      <h2>Our Menu</h2>
      {/* this is second way rendering using map method  */}
      {/* <div>
        {pizzaData.map((pizza) => {
          return <PizzaData name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photo={pizza.photoName} sold={pizza.soldOut} />
        })};
      </div> */}

      {/* this is third way */}
      {/* {numPizza &&( <ul className="pizzas">
        {pizzas.map((pizza) => {
          return <PizzaData pizzaObj={pizza} key={pizza.name} />
        })}
      </ul>)} */}


      {/* using ternary operator */}
     {numPizza>0 ?( <ul className="pizzas">
        {pizzas.map((pizza) => {
          return <PizzaData pizzaObj={pizza} key={pizza.name} />
        })}
      </ul>):"Pizza Not in Queue"}
     


      {/* passing data through props */}
      {/* <PizzaData name="Pizza Spinaci" ingredients = "Tomato, Mozarella, Spinach" photo="pizzas/spinaci.jpg" price={100}/>
    <PizzaData name="Pizza Funghi" ingredients = "Onion, Mozarella, Cheese" photo="pizzas/funghi.jpg" price={500}/> */}

    </main>
  )
}

// PizzaData component: Display pizzas dynamically using pizzaData
function PizzaData(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price + 50}</p>
        <span>{props.pizzaObj.soldOut}</span>
      </div>
    </li>
  )
}
// Header component: Displays the title
function Header() {
  // const style = {color:"red", fontSize:"48px" ,textTransform:"uppercase"}
  return (
    <header className="header">
      <h1>FAST PIZZA FIRST REACT PROJ</h1>
    </header>
  )
}


// Footer component: Basic footer implementation
function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);


  // if(hour>= openHour && hour<=closeHour)alert("We'r Currently Open!");
  // else alert("We'r Currently Close");

  return (
    <footer className="footer">
     <div className="order">
    <p>
    {isOpen && <p>We'r Open until unti {closeHour}:00 Come visit us or Order Online</p>}
    </p>
    <button className="btn">Order</button>
     </div>
    </footer>
  );
}

export default App;


