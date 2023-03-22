import React, {useState } from 'react'


export default class Forms=()=>{
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
        

    return(
     <div>
     <form classname="the_form" onsubmit="{handleSumbit}">
        <input type="text" classname="forms_todao" placeholder="What would like to add to your task today"  value={this.state.newItem} 
        onChange={e => this.updateInput(newItem,e.target.value)};
        <button type="sumbit" classname="add_btn" onClick={()=> this.addItem()}>Add your List</button>
    </form>

    <ul>
     {this.state.list.map(item =>{
        return(
            <li key ={item.id}>
            {item.value}
            <button onClick={()=>this.deleteItem(item.id)}>Delete</button>
            </li>
             )
     })}
    </ul>
     </div>
  
    )
}

