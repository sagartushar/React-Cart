import './index.css';
import Cart from './Cart'; 
import Navbar from './Navbar';
import React from 'react';
class  App extends React.Component {
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

countNumberofProducts=()=>{
  console.log(this.state.products);
  const {products} = this.state;
  var count = 0;
  products.map((product)=>{
     count += product.qty;
     return product.qty;
  })
  return count;
}
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count ={this.countNumberofProducts()}/>
        <Cart products = {products} deleteProduct = {this.deleteProduct} increaseQuantity ={ this.increaseQuantity} decreaseQuantity = {this.decreaseQuantity} />
      </div>
    )
  }
};


export default App;
