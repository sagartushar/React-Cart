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
    this.db = firebase.firestore(); 
}
componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot)=>{
      
  //     const products =  snapshot.docs.map((doc)=>{
  //       const data = doc.data();
  //       console.log(data);
  //       data['id'] = doc.id;
  //       return data;
  //     });
  //     this.setState({
  //       products,
  //       loading : false
  //     })
  //   })
    this.db
    .collection('products')
    // .orderBy('qty','asc')
    .onSnapshot((snapshot)=>{  //to add listener
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
addProduct=()=>{
  firebase
  .firestore()
  .collection('products')
  .add({
    img: '',
    price : 900,
    qty : 3,
    title : 'Washing Machine'
  })
  .then((docRef)=>{
    console.log('added product',docRef);
  })
  .catch((error)=>{
    console.log('Error',error);
  })
}
increaseQuantity=(product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef  
      .update({
        qty : products[index].qty + 1
      })
      .then(()=>{
        console.log("updated succesfully");
      })
      .catch((error)=>{
        console.log("Error",error);
      })
    
} 
decreaseQuantity=(product)=>{
  const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty <= 0)return ;
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef  
      .update({
        qty : products[index].qty - 1
      })
      .then(()=>{
        console.log("updated succesfully");
      })
      .catch((error)=>{
        console.log("Error",error);
      })
}
deleteProduct=(product)=>{

    const {products} = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);

      docRef
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
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
        <button onClick = {this.addProduct} style = {{padding : 20, fontSize : 15}}> Add a product</button>
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
