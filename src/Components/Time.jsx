import { useState } from "react";


const Time = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time)
  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(updateTime, 1000)
  return (
    <>
      <div className='col-6 text-center'>
        <div className="style2 btn1" type="button">
          <strong className="style3">{ctime}</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Time
