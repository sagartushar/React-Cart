import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 999,
            qty : 1,
            title: "Mobile",
            img : ''

        }
    }
    increaseQuantity=()=>{ 
        console.log('this',this.state);
        
        this.setState({   // object type
            
            qty : this.state.qty + 1,
        });
    }
    decreaseQuantity=()=>{ 
        console.log('this',this.state);
        if(this.state.qty > 0){
            this.setState({   // object type
                qty : this.state.qty - 1,
            });
        }
    }

    render(){
        const {price , qty , title} = this.state;
        
        return(
          
            <div className = 'cart-item'>
                <div className="left-block">
                    {/* // eslint-disable-next-line */}
                    <img style= {styles.image}></img>
                   
                </div>
                <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs {price} </div>
                    <div style={{color: '#777'}}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        <img alt ="increase" className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick = {this.increaseQuantity}></img>
                        <img alt ="decrease" className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick = {this.decreaseQuantity}
                            ></img>
                        <img alt ="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            onClick = {this.increaseQuantity}
                           ></img>
                    </div>
                </div>
            </div>
        )
    }
};
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
};
export default CartItem;