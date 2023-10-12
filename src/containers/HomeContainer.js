// import React from 'react';
import Home from '../components/Home'
import {connect} from 'react-redux';
import {addToCart } from '../service/constants';



// so, when we are just sending the data from react to this store then we use mapDispatchToProp

// when we are getting the data from react  map state to prop
// 3:30

// DispatchToProp is used to push the data inside the store

// get the data from the store


const mapStateToProps=state=>({


})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
