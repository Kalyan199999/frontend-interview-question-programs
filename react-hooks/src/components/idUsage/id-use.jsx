import './style.css'
import { useId } from "react"

const IdUsage = ()=>
{
    const id = useId();
    console.log("id uages");
    console.log(id);

    return(
        <div className="id-usage">
            <h1>Id Usage</h1>
            <input type="checkbox"  id={id} />
            <label htmlFor={id}>Check me</label>
        </div>
    )
}

export default IdUsage