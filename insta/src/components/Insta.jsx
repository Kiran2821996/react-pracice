import React, { Component } from 'react'

export default class Insta extends Component {
    constructor(props) {
        super(props)
        this.state= {
            random: 0
        }
    }
    getRandomNumber = () => {
        this.setState({random:Math.round(Math.random() * 1000)})
    }
    
    componentDidMount(){
      this.getRandomNumber()
    }
  render() {
    let { datas, random } = this.props;
    return (
      <div key={datas.id} className="container">
      <div className="top_berth">
        <div className="top_berth_left">
          <img src={datas.img} alt="" width="50px" height="50px" />
          <p>{datas.name}</p>
        </div>
        <div className="top_berth_right">
          <i className="fa-solid fa-soap"></i>
        </div>
      </div>
      <div className="middle_berth">
        <img src={datas.message} alt="" width="500px" height="555px" />
      </div>
      <div className="bottom_berth">
        <div className="top_bottom">
        <div className="left-bottom">
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-comment"></i>
          <i className="fa-solid fa-paper-plane"></i>
        </div>
        <div className="right-bottom">
          <i className="fa-solid fa-bookmark"></i>
        </div>
        </div>
        <div className="middle_bottom" >
        {this.state.random} likes
        </div>
        <div className="bottom_bottom">
        <i className="fa-regular fa-face-smile"></i>
        <input type="text" placeholder="Add Your Comments" />
        </div>
       
      </div>
    </div>
    )
  }
}
