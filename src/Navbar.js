import React from 'react';

const Navbar = (props) =>{
        return(
            <div>
                <div style ={styles.cartIcon}>
                <span style={styles.num}>{props.count}</span>
                    <img alt ="cart" 
                                className="action-icons" 
                                src="https://img-premium.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1625631403~hmac=bd6b1be922f3fe19c77e7c9e1ea286ea"
                    ></img>
                        
                </div>
                
            </div>
        )
};
const  styles ={
    cartIcon :{
      display :'flex',
      paddingRight : '1rem',
      flexDirection: 'row-reverse',
      padding: '10px',
      background :'blue',
    },
    num:{
        position: 'relative',
        top:'-10px',
        left:'-10px',
    }

  }
export default Navbar;