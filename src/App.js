import React, { Component } from 'react'
import axios from 'axios'
import Bootstrap from 'bootstrap'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: [],
      Lunch: [],
      Entree: [],
      Dessert: [],
      Special: []
    }
  }
  componentDidUpdate() {
    localStorage.setItem('Food', JSON.stringify(this.state.Food))
    localStorage.setItem('Lunch', JSON.stringify(this.state.Lunch))
    localStorage.setItem('Entree', JSON.stringify(this.state.Entree))
    localStorage.setItem('Dessert', JSON.stringify(this.state.Dessert))
    localStorage.setItem('Special', JSON.stringify(this.state.Special))
  }

  componentDidMount() {
    if (!localStorage.getItem('Food')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/4')
        .then(res => {
          this.setState({ Food: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Food')) {
      var storedFood = JSON.parse(localStorage.getItem('Food'))
      this.setState({
        Food: storedFood,
      })
    }
    if (!localStorage.getItem('Lunch')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/3')
        .then(res => {
          this.setState({ Lunch: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Lunch')) {
      var storedLunch = JSON.parse(localStorage.getItem('Lunch'))
      this.setState({
        Lunch: storedLunch,
      })
    }
    if (!localStorage.getItem('Entree')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/5')
        .then(res => {
          this.setState({ Entree: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Entree')) {
      var storedEntree = JSON.parse(localStorage.getItem('Entree'))
      this.setState({
        Entree: storedEntree,
      })
    }
    if (!localStorage.getItem('Dessert')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/7')
        .then(res => {
          this.setState({ Dessert: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Dessert')) {
      var storedDessert = JSON.parse(localStorage.getItem('Dessert'))
      this.setState({
        Dessert: storedDessert,
      })
    }
    if (!localStorage.getItem('Special')) {
      axios.get('http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/type/8')
        .then(res => {
          this.setState({ Special: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Special')) {
      var storedSpecial = JSON.parse(localStorage.getItem('Special'))
      this.setState({
        Special: storedSpecial,
      })
    }
  }



  render() {
    return (
      <div className="container-fluid mx-auto text-center bg-secondary">
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





        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          Apps
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Appitizers</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <ul className="list-unstyled">
                {this.state.Food.map(Food =>
                  <div>
                    <h1>{Food.description.split(" with ")[0]}</h1>
                    <li>{Food.description}</li>
                    <p>{Food.description.length}$</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>


        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Lunch</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Lunch</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <ul className="list-unstyled">
                {this.state.Lunch.map(Lunch =>
                  <div>
                    <h1>{Lunch.description.split(" with ")[0]}</h1>
                    <li>{Lunch.description}</li>
                    <p>{Lunch.description.length}$</p>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>





        <div id="accordion">
          <div className="card text-primary">
            <div className="card-header bg-primary" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Apps
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">

                  {this.state.Lunch.map(Lunch =>
                    <div>
                      <h1>{Lunch.description.split(" with ")[0]}</h1>
                      <li>{Lunch.description}</li>
                      <p>{Lunch.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Lunch
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">

                  {this.state.Lunch.map(Lunch =>
                    <div>
                      <h1>{Lunch.description.split(" with ")[0]}</h1>
                      <li>{Lunch.description}</li>
                      <p>{Lunch.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Entree's
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">

                  {this.state.Entree.map(Entree =>
                    <div>
                      <h1>{Entree.description.split(" with ")[0]}</h1>
                      <li>{Entree.description}</li>
                      <p>{Entree.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingFour">
              <h5 className="mb-0">
                <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Dessert
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">

                  {this.state.Dessert.map(Dessert =>
                    <div>
                      <h1>{Dessert.description.split(" with ")[0]}</h1>
                      <li>{Dessert.description}</li>
                      <p>{Dessert.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingFive">
              <h5 className="mb-0">
                <button className="btn btn-link text-white" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Special
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">

                  {this.state.Special.map(Special =>
                    <div>
                      <h1>{Special.description.split(" with ")[0]}</h1>
                      <li>{Special.description}</li>
                      <p>{Special.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white">
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