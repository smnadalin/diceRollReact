import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
      numberOfDice: 1, 
      numberOfSides: "10",
      previousRolls: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.rollDice = this.rollDice.bind(this);
  }

  handleChange(event)
  {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  rollDice(event)
  {
    
    var tally = 0;
    var rolls = ", Rolls were: ";

    for (var i = 0; i < this.state.numberOfDice; i++)
    {
        var roll = randomInteger(this.state.numberOfSides);
        rolls+= roll + ", ";                
        tally+= roll;
    }
    
    rolls = "Total: " + tally + rolls;

    this.setState(prevState => ( 
      {previousRolls: [rolls, ...prevState.previousRolls]})
    )
    
    event.preventDefault()
  }

  render()
  {
    return (
      <div>
        <form action="#" className="form">
          <label>Number of Dice:</label>
          <input type="number" min="0" max="20" name="numberOfDice" value={this.state.numberOfDice} onChange={this.handleChange}></input>
          <p>Which dice to use:</p>
          <input type="radio" name="numberOfSides" value="6" checked={this.state.numberOfSides=== "6"} onChange={this.handleChange}></input>
          <label>Six Sided</label><br></br>
          <input type="radio" name="numberOfSides" value="10" checked={this.state.numberOfSides === "10"} onChange={this.handleChange}></input>
          <label>Ten Sided</label><br></br>
          <input type="radio" name="numberOfSides" value="20" checked={this.state.numberOfSides === "20"} onChange={this.handleChange}></input>
          <label>Twenty Sided</label><br></br>
          <button onClick={this.rollDice}>Roll</button>
        </form>
        <ul style={{listStyle: "none", padding: 4, margin: 0}}>
        {this.state.previousRolls.length > 0 ? this.state.previousRolls.map(roll => <li key={roll}>{roll}</li>) : ""}
        </ul>

      </div>
    )
  }

}

export default App;

function randomInteger(max)
{
    return Math.floor(Math.random() * max + 1);
}