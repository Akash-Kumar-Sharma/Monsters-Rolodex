import { Component } from "react";
import Card from "../card/card.components";
import '../card/card.components'
import './card-list.style.css'

class CardList  extends Component{
   
    render(){
        console.log('render')
        const {monsters} = this.props;
        return(
            <div className='card-list'>
           {monsters.map(monsters => {
           
            return(
                <Card monsters={monsters}/>
           )})}
            </div>
        )
    }
}

export default CardList;