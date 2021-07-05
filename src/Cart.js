import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
         products :[
                {
                    price : 94599,
                    qty : 1,
                    title: "Laptop",
                    img : '',
                    id:1
                },
                {
                    price : 999,
                    qty : 1,
                    title: "Mobile",
                    img : '',
                    id:2
                },
                {
                    price : 999,
                    qty : 1,
                    title: "bile",
                    img : '',
                    id: 3
                },
            ]

        }
        // this.increaseQuantity(1);
    }
    increaseQuantity=(product)=>{
        product.qty++;
        this.setState({
            product
        })
        
    } 
    decreaseQuantity=(product)=>{
        if(product.qty > 0)
        product.qty--;
        this.setState({
            product
        })
        
    }
    deleteProduct=(product)=>{
        console.log(product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products.splice(index,1);
        this.setState({
            product
        })
    }   
    render(){
        const {products} = this.state;
        
     
        return (
            
            <div>
               {products.map((product)=>{
                   return <CartItem product = {product} 
                            key ={product.id} 
                            increaseQuantity = {this.increaseQuantity}
                            decreaseQuantity = {this.decreaseQuantity}
                            deleteProduct = {this.deleteProduct}
                        />;
                })}
                
            </div>
        )
    }
}
export default Cart; 