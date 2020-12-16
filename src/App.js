import React,{useState} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'
function App() {
  const [color,setColor]=useState('');
  const [list,setList]=useState([]);
  const [err,setErr]=useState(false);
  const handleColor=(e)=>{
  e.preventDefault();
    try{
      let newColor = new Values(color).all(10);
      setList(newColor)
      setErr(false)
    }catch(err){
      setErr(true);
      console.log(err)
    }
  }  
  return (
    <>
    <section className='container'>
        <h3>颜色生成器</h3>
        <form onSubmit={handleColor}>
            <input type='text' placeholder='#f15025' className={`${err ? 'error':null}` } 
            onChange={(e)=>setColor(e.target.value)}/>
            <button type='submit' className='btn'>提交</button>
        </form>

    </section>
    <section className='colors'>
      {list.map((item,index)=>{
        return <SingleColor key={index} color={item} index={index}></SingleColor>
      })}
    </section>
 </>
  );
}

export default App;
