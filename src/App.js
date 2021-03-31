import React, { Component } from 'react'
import axios from 'axios'




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


  componentDidMount() {
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
      axios.get(`http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/8`)
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
    return (
      <div className="container-full text-center">

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
                <div className="card-body">
                  <h5 className="card-title">Test</h5>
                  <p className="card-text">Test</p>
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
        </div>


        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#app" aria-controls="offcanvasExample">Apps</button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="app" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="app">Appetizers</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
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


        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#lunch" aria-controls="offcanvasExample">Lunch</button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="lunch" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="lunch">Lunch</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
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



        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Drinks</button>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Drinks</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body small">
            {this.state.Drinks.map(drink => {
              return (<li>
                <h1>{drink.name.split(" with ")[0]}</h1>
                <p>{drink.description}</p>
                <p>{drink.description.length}$</p>
              </li>)
            }
            )}
          </div>
        </div>




        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#dinner" aria-controls="offcanvasRight">Dinner</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="dinner" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Dinner</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
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




        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#dessert" aria-controls="offcanvasRight">Dessert</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="dessert" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Dessert</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div className="card-body">
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





        <div className="text-black">
          <h1>Hours of Operation</h1>
          <p>Sunday - Saturday</p>
          <p>8am - 9pm</p>
          <h1>Location</h1>
          <p>348 E Main St</p>
          <p>Lexington, Ky</p>
        </div>
      </div>

    )
  }
}


/*





<div className="container-full text-center">

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
                <div className="card-body">
                  <h5 className="card-title">Test</h5>
                  <p className="card-text">Test</p>
                </div>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
        </div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Accordion Item #1
      </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <ul className="list-unstyled">
                  {this.state.Appetizers.map(appetizer =>
                    <div>
                      <h1>{appetizer.name.split(" with ")[0]}</h1>
                      <li>{appetizer.description}</li>
                      <p>{appetizer.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
      </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
      </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
            </div>
          </div>
        </div>

        <div className="text-black">
          <h1>Hours of Operation</h1>
          <p>Sunday - Saturday</p>
          <p>8am - 9pm</p>
          <h1>Location</h1>
          <p>348 E Main St</p>
          <p>Lexington, Ky</p>
        </div>
      </div>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Appetizers
      </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div className="card-body">
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
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Lunch
      </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div className="card-body">
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
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
      </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
            </div>
          </div>
        </div>







*/