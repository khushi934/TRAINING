import { useRef } from "react"


const MyPortfolio = () => {
const homeRef=useRef(null)
const aboutRef=useRef(null)
const skillsRef=useRef(null)
const projectsRef=useRef(null)
const contactRef=useRef(null)
 const scrollToSection=(ref)=>{
    ref.current.scrollIntoView({behavior:"smooth"})
 }

return(
    <div className ="bg-gray-100 min-h-screen">
        <nav >

        </nav>

    </div>
)















//     const skill = useRef(null)

//     const scrolltoskills =()=>{
//         skill.current.scrollIntoView({behaviour:"smooth"})
//     }
//     const about= useRef(null)
//     const scrolltoabout =()=>{
//         about.current.scrollIntoView({behaviour:"smooth"})
//     }
//     const education=useRef(null)
//     const scrolltoeducation=()=>{
//         education.current.scrollIntoView({behaviour:"smooth"})
//     }
    
//   return (<>
  
//   <nav className="bg-blue-600 text-white p-4 text-xl">
//             <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
//             <h1 className="text-2xl font-bold ">My Portfolio</h1>
//             <ul className='flex justify-cente gap-15'>
// <button onClick={scrolltoabout}>About</button>
// <button onClick={scrolltoeducation}>Education</button>
// <button onClick={scrolltoskills}>Skills</button>
//  <a href="#"><li>Certifications</li></a>
//  <a href="#"><li>Contacts</li></a>

//       </ul>      
//       </div>
//         </nav>
// <div className="text-lg font-bold">
//         <h1 className='mt-300' ref={skill}>Skills</h1>
//         <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>Java Script</li>
//             <li>MongoDb</li>
//             <li>Express,Recact</li>
//         </ul>
//         </div>
//         <h1 className="mt-300" ref={about}>About</h1>
        
//             <span ><h2>I am Khushi Chaudhary</h2></span>
//             <p>
//                 I am a Computer Science student interested in
//                     Web Development, AI, and Machine Learning.
//                 </p>

        
//   </>
        

  //)
}

export default MyPortfolio
