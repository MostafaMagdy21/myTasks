import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainNav from "./component/navBar";
import AddNew from "./pages/addNew";
import HomePage from "./pages/Home";
import ShowList from "./pages/showlist";

class App extends React.Component {
  state = {
    prodacts: [],

    newItem: "",
    newPrise: "",
  };

  onChangeItemHandler = (e) => {
    const newItem = e.target.value;

    this.setState({
      newItem,
    });
  };

  onChangePriseHandler = (e) => {
    const newPrise = e.target.value;

    this.setState({
      newPrise,
    });
  };

  onClickAddItem = () => {
    let prodacts = this.state.prodacts;

    prodacts = [
      ...prodacts,
      {
        id: this.state.prodacts.length + 1,
        item: this.state.newItem,
        prise: this.state.newPrise,
      },
    ];

    this.setState({
      prodacts,
      newItem: "",
      newPrise: "",
    });
  };

  onClickDeleteItem = (item) => {
    let prodacts = this.state.prodacts.filter((prodact) => item != prodact);
    // let prodacts = this.state.prodacts.map((prodact) =>(
    //     if(item == prodact){
    //         delete prodact
    //     }else{
    //         return prodact
    //     }
    // ));

    this.setState({
      prodacts,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <MainNav />
        <div className="contentapp">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/list">
              <ShowList
                prodacts={this.state.prodacts}
                onClickDeleteItem={this.onClickDeleteItem}
              />
            </Route>

            <Route exact path="/addnew">
              <AddNew
                itemvalue={this.state.newItem}
                prisevalue={this.state.newPrise}
                onChangeItemHandler={this.onChangeItemHandler}
                onChangePriseHandler={this.onChangePriseHandler}
                onClickAddItem={this.onClickAddItem}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
