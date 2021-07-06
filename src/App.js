import './index.css';
import Cart from './Cart'; 
import Navbar from './Navbar';
import React from 'react';
import firebase from 'firebase/app'
import "firebase/firestore";
class  App extends React.Component {
  constructor(){
    super();
    this.state = {
     products :[],
     loading : "true",

    }
 
}
componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      
      const products =  snapshot.docs.map((doc)=>{
        const data = doc.data();
        console.log(data);
        data['id'] = doc.id;
        return data;
      });
      this.setState({
        products,
        loading : false
      })
    })
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

    const {products} = this.state;
    const index = products.indexOf(product);
    products.splice(index,1);
    this.setState({
        product
    })
}  

countNumberofProducts=()=>{
  
  const {products} = this.state;
  var count = 0;
  products.map((product)=>{
     count += product.qty;
     return product.qty;
  })
  return count;
}
getTotal =()=>{
  const {products} = this.state;
  var amount = 0;
  products.map((product)=>{
    amount += product.qty * product.price;
    return product;
  });
  return amount;
}
  render(){
    const {products} = this.state;
   
    return (
      <div className="App">
        <Navbar count ={this.countNumberofProducts()}/>
        <Cart products = {products} 
              deleteProduct = {this.deleteProduct} 
              increaseQuantity ={ this.increaseQuantity} 
              decreaseQuantity = {this.decreaseQuantity} 
              />
        {this.state.loading && <h1> Loading Products .. </h1>}
        <div className= "Total" style = {{margin:'45px'}}>
          Total : {this.getTotal()}
        </div>
     </div>
    )
  }
};


export default App;
