import React from "react";

function Home(){
    return(

    <>
        
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }}>

<h1>Home Component Only</h1>

<h2>Cart Items == [ {4} ]</h2>


    </div>

    <div  style={{
        // height:"5vw",
        // width:"50vw",
        display:"flex",
        border:"2px solid black",
        flexDirection:"column",
        margin:"20"

        }}
>

    <div style={{
        height:"5vw",
        width:"50vw",
        border:"2px solid black",

        display:"flex",
        justifyContent:"space-between",
        margin:"20px"

    }}>
     <h3>PRODUCT 1</h3>
  <button>Add to Cart</button>
    </div>

    {/* 555555555555555555555555555555555555555555 */}

    <div style={{
        height:"5vw",
        width:"50vw",
        border:"2px solid black",

        display:"flex",
        justifyContent:"space-between",
        margin:"20px"
    }}>
     <h3>PRODUCT 2</h3>
  <button>Add to Cart</button>
    </div>

    {/* 5555555555555555555555555555555555555555 */}


    <div style={{
        height:"5vw",
        width:"50vw",
        border:"2px solid black",

        display:"flex",
        justifyContent:"space-between",
        margin:"20px"
    }}>
     <h3>PRODUCT 3</h3>
  <button>Add to Cart</button>
    </div>
    
</div>


    </>
    )
}
// export default Home;