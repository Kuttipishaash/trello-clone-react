import React, { Component } from 'react'

export default class BoardsPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         inputFieldValue: "",
         boards: []
      };
    }
    
    renderBoards(){
        return <div>Hello this is rendered board</div>
    }
    render() {
        return (
            <div>
                <div>
                    <form>
                        <input type="text" onSubmit={this.onSubmit}/>
                        <button type="submit">Add Board</button>
                    </form>
                </div>
                <div>
                    {this.renderBoards()}
                </div>
            </div>
        );
    }
}
