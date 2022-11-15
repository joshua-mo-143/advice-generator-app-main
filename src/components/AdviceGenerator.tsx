import axios from 'axios'
import React, { useEffect } from 'react'

type Object = {
    slip: Object;
    advice: String;
    id: number;
}

const AdviceGenerator = () => {
    const [data, setData] = React.useState<Object>()

    const getData = async () => {
        try {
        await axios.get('https://api.adviceslip.com/advice')
        .then(res => {setData(res.data.slip)});
        } catch(e:any) {
            console.log(e.message);
        }
    
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <>
    <div className='adviceGenContainer'>
        <h1 className='adviceNumber'>Advice {data ? data.id : ""}</h1>
        <q className='adviceText'>{data ? data.advice : ""}</q>
        <div className="divider">
            <img src="pattern-divider-desktop.svg" alt="Layout divider"/>
        <button onClick={getData}>
            <img src="/icon-dice.svg" />
        </button>
        </div>
    </div>
        </>
  )
}

export default AdviceGenerator