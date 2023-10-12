// first we are going to make a function
// function can be the cart item 
// now it will have a switch statement

// in this we will make the conditions , you can say that the switch case based on this type also

// we need the {2} parameters in the cart item 
// 1)_ first is Initial state ==means by default state
// 2)- second is action 

import { ADD_TO_CART } from "../constants";

const initialState={
    // why this is blank array bcz when we just load our application this will the blank 
    // and when we just getting the item add here then these items will be add in this object
    cardData:[]
}

export default function cardItem(state=initialState,action){
    // switch("conditions")

    switch(action.type)
    {
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.cardData
            }

            default:
                return state
    }

}



// how we are actually connected the reducer and the action here.
// we did not import the file 
// this is actually done by the container

