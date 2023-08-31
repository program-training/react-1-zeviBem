import { useState } from "react";
function Text1(): JSX.Element {
    const [text, setIsClick] = useState<boolean>(false);

    const toggle = (): void => {
        setIsClick(!text);
    };
    return(
        <div>
           <h1>{text}</h1> 
           <button onClick={toggle}>click me</button>
           {text ? <div> 'Text' </div> : null}
        </div>
    )
}
export default Text1