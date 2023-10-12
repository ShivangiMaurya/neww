
import {ADD_TO_CART} from '../constants';
// this similar const will be used in reducer also...
export const addToCart=(data)=>{
    return{
        // const are 
        // we return {2} things 
        // {type} will just actually make the filter out the data
        // It will tell that what function actually called by the button click
        // what location we have to perform  

        //   type:"ADD_To_CART",
        
        // like-- type is add to cart type
        // if we just remove the data then we just make the type like
        // 
        // type:'ADD_TO_CART',
        type:ADD_TO_CART,
        // we'll get this data in the parameter
        data:data

    }
}


const removeToCart=(data)=>{
    return{
        type:'REMOVE_TO_CART',
        data:data

    }
}









// the same type we use in {action and reducer}
// it will just tell that this data is coming from {}
// In the reducer it will just tell that this data is coming from {remove to cart }
// we will use the same type in the reducer also.
// so that we are using the same type in the {2} file that why we have to define the constant 
// rather than the string
