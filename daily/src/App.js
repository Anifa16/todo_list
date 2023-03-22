import { differenceBy } from 'cypress/types/lodash';
import React from 'react';
import './App.css';


class  App extends Component {
  constructor(props){
    super(props):

    this.state={
      newitems:'',
      list:[]
    }
  }
  
  // function to update input 
  updateInput(key, value){
    this.setState({
    
    })
  }

  addItem(){
    //create items with uniquec id 
    const newITem={
      id: 1+ Math.random(),
      value:this.state.value.newITem.slice()

    };

    //create a copy of current list of items

    const list = [...this.state.list];

    //add new items to list 

    list.push(newItem)



    //update state with new list and reset new items
      this.setState({
        list,
        newItems: ''
      });


  }
  // We want to be able to delete itens so we need a fuction for this ]

  deleteItem (id){
    //capy list current list items 
    const list = [...this.state.list]

    //filter though our list 
  const updateList = list.filter(item => item.id !== id)

  this.setState(list:updateList)

  }



  
  render() { 
    return (
      <div className="App">
       
       <div>
        Please add your Task
        <br></br>
        in
       </div>
      </div>
    );
  }
}
 
export default ;
