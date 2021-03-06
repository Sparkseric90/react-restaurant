import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import Logo from "./logo.png"
import Fancy from './fancy.jpeg';
import Lunch from './lunch.jpg';
import Dinner from './dinner.jpg';
import Dessert from './dessert.jpg';
import Chef from './chef.jpg';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appetizers: [],
      Lunch: [],
      Dinner: [],
      Dessert: [],
      Special: []
    }
  }



  componentDidUpdate() {
    localStorage.setItem('Appetizers', JSON.stringify(this.state.Appetizers))
    localStorage.setItem('Lunch', JSON.stringify(this.state.Lunch))
    localStorage.setItem('Dinner', JSON.stringify(this.state.Dinner))
    localStorage.setItem('Dessert', JSON.stringify(this.state.Dessert))
    localStorage.setItem('Drinks', JSON.stringify(this.state.Special))
  }


  async componentDidMount() {
    if (!localStorage.getItem('Appetizers')) {
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/4`)
        .then(res => {
          this.setState({ Appetizers: res.data });
        })
    }
    else {
      var storedAppetizers = JSON.parse(localStorage.getItem('Appetizers'))
      this.setState({
        Appetizers: storedAppetizers,
      })
    }

    if (!localStorage.getItem('Lunch')) {
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/4`)
        .then(res => {
          this.setState({ Lunch: res.data });
        })
    }
    else {
      var storedLunch = JSON.parse(localStorage.getItem('Lunch'))
      this.setState({
        Lunch: storedLunch,
      })
    }


    if (!localStorage.getItem('Dinner')) {
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/5`)
        .then(res => {
          this.setState({ Dinner: res.data });
        })
    }
    else {
      var storedDinner = JSON.parse(localStorage.getItem('Dinner'))
      this.setState({
        Dinner: storedDinner,
      })
    }


    if (!localStorage.getItem('Dessert')) {
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/7`)
        .then(res => {
          this.setState({ Dessert: res.data });
        })
    }
    else {
      var storedDessert = JSON.parse(localStorage.getItem('Dessert'))
      this.setState({
        Dessert: storedDessert,
      })
    }

    if (!localStorage.getItem('Drinks')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/8')
        .then(res => {
          this.setState({ Drinks: res.data });
        })
    }
    else {
      var storedDrinks = JSON.parse(localStorage.getItem('Drinks'))
      this.setState({
        Drinks: storedDrinks,
      })
    }




  }

  render() {

    let myItems = [];

    if (this.state.Drinks != null) {
      myItems = this.state.Drinks;
    }

    return (
      <div className="container-fluid text-center">



        <div className="row">
          <div className="col-12 mx-auto">
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <div class="card">
                <div className="card-body2">
                  <img className="card-img-top" src={Logo} />
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
        </div>



        <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#app" aria-controls="offcanvasExample">Apps</button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="app" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="app">Appetizers</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
            <img className="card-img-top" src={Fancy} />
              <ul className="list-unstyled">
                {this.state.Appetizers.map(appetizer => {
                  return (<li>
                    <h1>{appetizer.name.split(" with ")[0]}</h1>
                    <p>{appetizer.description}</p>
                    <p>{appetizer.description.length}$</p>
                  </li>)
                }
                )}
              </ul>
            </div>
          </div>
        </div>


        <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#lunch" aria-controls="offcanvasExample">Lunch</button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="lunch" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="lunch">Lunch</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
            <img className="card-img-top" src={Lunch} />
              <ul className="list-unstyled">
                {this.state.Lunch.map(lunch => {
                  return (<li>
                    <h1>{lunch.name.split(" with ")[0]}</h1>
                    <p>{lunch.description}</p>
                    <p>{lunch.description.length}$</p>
                  </li>)
                }
                )}
              </ul>
            </div>
          </div>
        </div>



        <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Drinks</button>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Drinks</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small">
            {myItems.map(drink => {
              return (<li>
                <h1>{drink.name.split(" with ")[0]}</h1>
                <p>{drink.description}</p>
                <p>{drink.description.length}$</p>
              </li>)
            }
            )}
          </div>
        </div>




        <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#dinner" aria-controls="offcanvasRight">Dinner</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="dinner" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Dinner</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
            <img className="card-img-top" src={Dinner} />
              <ul className="list-unstyled">
                {this.state.Dinner.map(dinner => {
                  return (<li>
                    <h1>{dinner.name.split(" with ")[0]}</h1>
                    <p>{dinner.description}</p>
                    <p>{dinner.description.length}$</p>
                  </li>)
                }
                )}
              </ul>
            </div>
          </div>
        </div>




        <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#dessert" aria-controls="offcanvasRight">Dessert</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="dessert" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Dessert</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
            <img className="card-img-top" src={Dessert} />
              <ul className="list-unstyled">
                {this.state.Dessert.map(dessert => {
                  return (<li>
                    <h1>{dessert.name.split(" with ")[0]}</h1>
                    <p>{dessert.description}</p>
                    <p>{dessert.description.length}$</p>
                  </li>)
                }
                )}
              </ul>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-12 mx-auto">
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <div class="card">
                <div className="card-body2">
                  <img className="card-img-top" src={Chef} />
                  <h1>Head Chef:</h1>
                  <p>Mr. Bob Squarepants</p>
                  <p>Bobs been a fry cook for 17 years for a world famous burger shop. He recently moved into the fancy diner world were he hopes to make a
                  successful splash.</p>
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="text-black">
            <h1>Hours of Operation</h1>
            <p>Sunday - Saturday</p>
            <p>8am - 9pm</p>
            <h1>Location</h1>
            <p>348 E Main St</p>
            <p>Lexington, Ky</p>
          </div>
        </div>
      </div>


    )
  }
}





