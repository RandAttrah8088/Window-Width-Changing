import React,{useEffect,useState} from "react";

function App() {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth)

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleResize)
    return()=>{ //this return code is acting as a cleanup for what has been done last time
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return (
<>
  <div>
  {windowWidth}
  </div>
</>
  );
}

export default App;
