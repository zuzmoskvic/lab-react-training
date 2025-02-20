import SingleColorPicker from "./SingleColorPicker"
import {useState} from "react";

function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

  return (
    <>
        <div style={{margin: "100px"}}>
        <SingleColorPicker 
            color="r"
            value={rValue}
            onChange={ (event) => { setRValue(event.target.value)}  }
            />

            <SingleColorPicker 
            color="g"
            value={gValue}
            onChange={ (event) => { setGValue(event.target.value) }  }
            />

            <SingleColorPicker 
            color="b"
            value={bValue}
            onChange={ (event) => { setBValue(event.target.value) }  }
            />

            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"20px", height:"20px", border: "1px black solid", 
                backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}></div>
                <div><p>rgb({rValue},{gValue},{bValue})</p></div>
            </div>
        </div>

    </>
  )
}

export default RGBColorPicker
