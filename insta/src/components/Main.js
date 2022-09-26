import React, { Component } from "react";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "jkhdsuygbieeuh",
          name: "Joseph",
          img: "../images/profilepic_1.jpg",
          message: "../images/message_1.gif",
        },
        {
          id: "lkffnidhdwisd",
          name: "Phelep",
          img: "../images/profilepic_2.webp",
          message: "../images/message_2.gif",
        },
        {
          id: "dddddednwih9o",
          name: "Ronaldo",
          img: "../images/profilepic_3.jpg",
          message: "../images/message_3.jpg",
        },
        {
          id: "gwehwdicns09i",
          name: "Kartin",
          img: "../images/profilepic_4.png",
          message: "../images/message_4.jpg",
        },
        {
          id: "w8wwnrofjojmi",
          name: "Baleri",
          img: "../images/profilepic_5.jpg",
          message: "../images/message_5.png",
        },
      ],
 random:0,
    
    };


  }

  getRandomNumber = () => {
    return Math.round(Math.random() * 1000)
}

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.data.map((datas) => (
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
              {this.getRandomNumber()} likes
              </div>
              <div className="bottom_bottom">
              <i className="fa-regular fa-face-smile"></i>
              <input type="text" placeholder="Add Your Comments" />
              </div>
             
            </div>
          </div>
        ))}
      </>
    );
  }
}
