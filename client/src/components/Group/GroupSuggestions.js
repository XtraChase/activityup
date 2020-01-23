import React from "react";
import UpArrow from "../../images/Arrow.png";

function GroupSuggestions() {
  return (
    <div>
      <div className="suggestion">
        <div className="suggestionRow">
          <div className="suggestionColumn upVoteableImage">
            <img
              className="groupImage"
              src="https://www.playstationlifestyle.net/assets/uploads/2020/01/Modern-Warfare-error.jpg"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src={UpArrow}
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">5</p>
          </div>
          <div className="suggestionColumn upVoteableImage">
            <img
              className="groupImage"
              src="https://hb.imgix.net/ae475dd426714e9e7857b28f92009011d16ac98e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ff11c567c3750076b8624c1f22a83547"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src={UpArrow}
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">3</p>
          </div>
          <div className="suggestionColumn upVoteableImage">
            <img
              className="groupImage"
              src="https://assets1.ignimgs.com/2018/02/23/overwatch-button-v2-1519416414955.jpg"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src={UpArrow}
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">0</p>
          </div>
          <div className="suggestionColumn upVoteableImage">
            <img
              className="groupImage"
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F85037341%2F26975821121%2F1%2Foriginal.20190305-175625?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C50%2C1600%2C800&s=6ac1b61dd8f60ab58337213bb8794a09"
              alt="activity type"
              width="100%"
            />
            <img
              className="upVoteArrow"
              src={UpArrow}
              alt="Up Vote Arrow"
              width="15px"
              // onClick={this.state.UpVote()}
            />
            <p className="upVoteCount">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupSuggestions;
