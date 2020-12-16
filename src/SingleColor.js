import React,{useState,useEffect} from 'react'

const SingleColor = ({color:{rgb,weight,hex} , index:index}) => {
    const [show,setShow]=useState(false);
    let bcg = rgb.join(',');
    const newHex=`#${hex}`;
    useEffect(()=>{
        const timer = setTimeout(() => {
            setShow(false);
        }, 2000);
        return ()=>clearTimeout(timer)
    })
    return (
        <article onClick={()=>{navigator.clipboard.writeText(newHex); setShow(true)}} 
        className={`color ${index>10? 'color-light':''} `} style={{background:`rgb(${bcg})`}}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{newHex}</p>
            {show?<p className='alert'>已复制剪切板</p>:null}
        </article>
    )
}

export default SingleColor
