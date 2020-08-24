import React, { Component } from 'react';
document.body.style = 'background: url("test.jpg");';
class Note extends Component{
    constructor(props){
        super(props);
        
        this.state={
            items: []
        }
        
        this.addNote=this.addNote.bind(this);
        
        }
    
    addNote(event) {
        console.log("Working"); 
        if(this.theTitle.value == "" || this.theNote.value==""){
            alert("Please enter valid data");           
        }
        
        
        
        else if( this.theTitle.value !== "") {
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        
        this.setState((prevState)=>{
            return{
                items: prevState.items.concat(newItem)
            };
        });
        
        this.theNote.value="";
        this.theTitle.value="";
        console.log(this.state.items);
        
        event.preventDefault();   //THe page wont refresh when the form is submitted
        
    }
    render(){
    return (
        <div className="notess">
        <header>
           <h1>Scribble-it!</h1>
        </header>
        <div className="main-content">
        <ul>
         {this.state.items.map( (val) => <li>{val.title} =: {val.note}
       </li>
        )} </ul>
        </div>
        <footer>
            <form onSubmit={this.addNote}>
        <input 
        type="text"
        placeholder="Enter Note title here"
        ref={(title) => this.theTitle=title}
        />
        <textarea 
        placeholder="Enter Note here"
        ref={(note) => this.theNote=note}
        />
        <button type="submit">Add Note</button>
        </form>
        </footer>
        </div>
    );
}}
export default Note;