import { useRef, useState } from 'react'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { random } from 'nanoid'


const App = () => {
  const random = gsap.utils.random(-500, 500, 100)
  const [circle, setcircle] = useState(0)
  const [rotate, setRotate] = useState(0)

  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: circle,
      duration: 1,
      rotate: rotate,
  })
   })

  // useLayoutEffect(()=>{
  // gsap.to(".box",{
  //   y:300,
  //   rotate:360,
  //   duration:1,
  //   delay:1
  // })


  // gsap.from(boxRef.current,{
  //   rotate:360,
  //   delay:1,
  //   duration:1
  // })

  //------------we have used the scope variable 
  //   gsap.from(".box",{
  //     rotate:360,
  //     duration:1,
  //     delay:1,
  //     opacity:0,
  //     scale:0,
  //   })
  // },{scope:".container"})



  useGSAP(() => {
    gsap.to("circle", {
      x: circle,
      duration: 0.5
    })

  }, [circle])


  return (
    <main>
      {/* <div className="container">
      <div className="circle"></div>
      <div  ref={boxRef} className="box"></div>
    </div>
    <div className="kuch">
      <div className="circle"></div>
      <div className="box"></div>
    </div> */}

      <button onClick={() => {
        setcircle(random)
      }}>Animation</button>
      <div ref={boxRef} className='circle'></div>
    </main>
  )
  
})


export default App;