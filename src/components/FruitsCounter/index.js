import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onIncreaseMangoCount = () =>
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
    }))

  onIncreaseBananaCount = () =>
    this.setState(prevState => ({
      bananaCount: prevState.bananaCount + 1,
    }))

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="fruits-container">
          <h1 className="fruits-heading">
            Bob ate
            <snap className="fruit-counter"> {mangoCount}</snap> mangoes
            <snap className="fruit-counter"> {bananaCount}</snap> bananas
          </h1>
          <div className="cards-container">
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango-image"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncreaseMangoCount}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="mango-image"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncreaseBananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
