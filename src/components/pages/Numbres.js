import React, { useEffect, useState } from "react";
function Numbres() {
   const [age, setAge] = useState();
        const [number, setNumber]= useState();


        const handleChange = (e) => {
            const value = e.target.value.replace(/\D/g, "");
            setAge(value);
            const obj = e.target.value.replace(/\D/g, "");
            setNumber(value);
        };

        return (
            <>
                <div className="App">
                    <input value={age} onChange={handleChange} />
                </div>
                {/*<br/>*/}
                <div className="App">
                    <input value={number} onChange={handleChange} />
                </div>
            </>
        );
    }
export default Numbres;
