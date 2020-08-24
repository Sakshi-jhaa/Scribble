import React,{Component} from 'react';
class Prop extends Component{
    render(){
        var title;
        var genre;
        return(
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.genre}</h2>
            </div>
        );
    }
}
export default Prop