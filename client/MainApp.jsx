"use strict";

export default class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          'followers':0,
          'followersInc':1,
          'cashMoney':50,
          'collabs':0
        };
        this.addFollower = this.addFollower.bind(this);
        this.addMoney = this.addMoney.bind(this);
        this.subMoney = this.subMoney.bind(this);
        this.buyGreenscreen = this.buyGreenscreen.bind(this);
        this.buyStaff = this.buyStaff.bind(this);
        this.staffLoop = this.staffLoop.bind(this);
    };
    addFollower(){
      this.setState({'followers':this.state.followers+this.state.followersInc});
    }
    addMoney(amt){
      this.setState({'cashMoney':this.state.cashMoney+amt});
      return true;
    }
    subMoney(amt){
      if(this.state.cashMoney<amt) return false;
      this.setState({'cashMoney':this.state.cashMoney-amt});
      return true;
    }
    buyGreenscreen(){
      if(this.subMoney(10)){
        this.setState({'followersInc':this.state.followersInc+1});
        return true;
    }
    return false;
    }
    staffLoop(){
      this.addFollower();
      setTimeout(this.staffLoop,100);
    }
    buyStaff(){
      if(this.subMoney(10)){
        this.staffLoop();
        return true;
      }
      return false;
    }
    render() {
        return (
        <div> 
          Followers: {this.state.followers} 
          <Button 
            btnText="Stream on Twitch" 
            clickCb={this.addFollower}
            ></Button>
            <UpgradeButton 
              btnText="Buy Greenscreen" 
              btnCost={10}
              clickCb={this.buyGreenscreen}
              ></UpgradeButton>
              <UpgradeButton
                btnText="Hire Fulltime Staff"
                btnCost={10}
                clickCb={this.buyStaff}
                ></UpgradeButton>
          </div>
          );
    }
}
class UpgradeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'pressed':false
    };
    this.myClick= this.myClick.bind(this);
  }
  myClick(){
    if(this.props.clickCb())
      this.setState({'pressed':true});
  }
  render(){
    if(this.state.pressed) {
      return( <div> Unlocked: {this.props.btnText} </div>);
    } else {
      return( <div onClick={this.myClick}> ${this.props.btnCost}- {this.props.btnText}</div>);
    }
  };
}
export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.myClick= this.myClick.bind(this);
  };
  myClick(evt){
    this.props.clickCb();   
  }
  render(){
    return(
      <div onClick={this.myClick}>{this.props.btnText}</div>
    );
  };
}