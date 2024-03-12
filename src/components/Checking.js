import React from "react";


const Checking = () => {
    return (
        <div>
            <div>
            <input type="checkbox" id="classique"/> <label htmlFor="classique">Classique</label>
        </div>
         <div>
             <input type="checkbox" id="ext"/> <label htmlFor="ext">Extérieure</label>
         </div>
        </div>
    )
}

export default Checking;