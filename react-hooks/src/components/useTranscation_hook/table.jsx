import './style.css'
import { useState , useTransition } from "react"

const calculateTables = ( num )=>
{
    num = num ? num : 0;

    let arr = []
    for(let i=1;i<=2000;i++)
    {
        arr.push(`${num} * ${i} = ${num*i}`)
    }

    return arr;
}

const MathematicalTable = ()=>
{
    const [ value , setValue ] = useState(1)

    const [ tables , setTable ] = useState([])

    const [ isPending , startTransition ] = useTransition()

    const handleChange = (e)=>
    {
        const newValue = e.target.value;
        setValue(newValue)

        startTransition( ()=>{
            const arr = calculateTables( parseInt(newValue , 0) )
            setTable(arr);
        })
        
    }

    return(
        <div className="table">
            <input type="number" value={value} onChange={(e)=>handleChange(e)}  />

            {
                isPending ? <h1>Loading..............</h1>
                :
                <div>
                    <h1>Results</h1>
                   { tables.map((item,index)=><p key={index}>{item}</p>)}
                </div>
            }

        </div>
    )
}

export default MathematicalTable;