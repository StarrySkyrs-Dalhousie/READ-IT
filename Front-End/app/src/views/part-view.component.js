import React from 'react';
import AddLine from '../services/AddLine';
import AuthService from "../services/auth.service";

export default class Part extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          poNo: "default",
          pos: [],
        };
    }
        

    render(){
        const currentUser = AuthService.fetchCurrentUser();
        var id = null;
        if(currentUser !== null){
            id = currentUser.id;
        }
        return (
            <div style={{marginBottom:'20px', radius:"0px"}} class="card">
            <div style={{}} class="card-body">
            <img width="200px" 
                class="card-image-top" 
                src="https://orly-appstore.herokuapp.com/generate?title=Learn%20Computer%20Science&top_text=Get%20access%20to%20all%20the%20tests%20and%20solutions&author=Adama%20Camara&image_code=40&theme=13&guide_text=Steal%20that%20degree%20boy%20&guide_text_placement=bottom_right"
                // src={this.props.picture} 
                alt="cube"/>
                <h4 class="card-title">{this.props.partName}</h4>
                <h5><span class="badge bg-secondary">$ {this.props.currentPrice}</span></h5>
                <p class="card-text">{this.props.description}</p>
                <AddLine user_id={id} id={this.props.id} price={this.props.currentPrice} />
            </div>
            </div>
        );
    }
}