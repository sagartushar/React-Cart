import React from 'react';
class CartItem extends React.Component{
 
    

    render(){
        const {price , qty , title} = this.props.product;
        console.log(this.props);
        return(
          
            <div className = 'cart-item'>
                <div className="left-block">
                  <img style= {styles.image}></img>
                   
                </div>
                <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs {price} </div>
                    <div style={{color: '#777'}}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        <img alt ="increase" className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick = {()=>this.props.increaseQuantity(this.props.product)}></img>
                        <img alt ="decrease" className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick = {()=>this.props.decreaseQuantity(this.props.product)}
                            ></img>
                        <img alt ="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            onClick = {()=>this.props.deleteProduct(this.props.product)}
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