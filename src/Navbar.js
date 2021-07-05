import React from 'react';

const Navbar = (props) =>{
        return(
            <div>
                <div style ={styles.cartIcon}>
                <span style={styles.num}>{props.count}</span>
                    <img alt ="cart" 
                                className="action-icons" 
                                src="https://img-premium.flaticon.com/png/512/3002/premium/3002240.png?token=exp=1625467900~hmac=0ca53a23beb1fb55aae385631945813d"
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