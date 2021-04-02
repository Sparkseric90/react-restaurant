Ohhhhhhh LaLa Restaurant

As a user with the restaurant app i will want to be able to:
    -navigate a site that has a menu with different sections, App, Salads, Dinner etc.
    -be able to see each section separately.
    -of course be able to find something great to eat.

When creating this app I will want to see:
    -Main page for the different sections of the menu.
    -Different cards for each menu section (Apps, Lunch, Dinner, Sides, Desserts)
    -Menu to change with the api for the different sections.



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
