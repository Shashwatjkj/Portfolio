import "../index.css"
import {useState} from "react"
import AccordionDemo from "./accordion.jsx"


export  default function About(){
    const [state,setState]=useState("");

    function handleOnclick(e){
        const t=e.target.innerText
        setState((prev)=>(prev===t?"":t));
        console.log(state)
    }


    return(
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
            </div>
        
        <div className="about-section">
            <div className="about-left">
                <img className="main-img" src={"Photo_shashwat.jpeg"}alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Shashwat Sharma, a final-year Computer Science & Engineering student at Ajay Kumar Garg Engineering College (2025) with a strong focus on backend development and scalable system design. My technical expertise spans Node.js, Express, TypeScript, Go, MongoDB, and PostgreSQL, along with experience in building REST APIs, microservices, and real-time applications.</p>
                    <p>I have also interned as an Android Security Trainee at DRDO and contributed to backend development at eCartify, strengthening my practical skills in software engineering. Passionate about algorithms, problem-solving, and system performance, I actively contribute to projects on GitHub and continue exploring cloud, DevOps, and AI-driven solutions. Outside of tech, I enjoy playing chess and swimming, which help me stay sharp and balanced.</p>
                </div>
                
            </div>
            </div>
            {/* <div className="about-skills">
                    <div className={`skill ${open === "HTML" ? "open" : ""}`}><button onClick={(e)=>handleOnclick(e)} className="button-press">HTML</button>
                        {state==="HTML"&& <div className="slide"><p>Lorem ipsum dolo</p></div>}
                    </div>
                    <div className="skill"><button onClick={(e)=>handleOnclick(e)} className="button-press">CSS</button>
                        {state==="CSS"&& <div className="slide"><p>Lorem ipsum dolo</p></div>}
                    </div>
                    <div className="skill"><button onClick={(e)=>handleOnclick(e)} className="button-press">JavaScript</button>
                        {state==="JavaScript"&& <div className="slide"><p>Lorem ipsum dolo</p></div>}
                    </div>
                    <div className="skill"><button onClick={(e)=>handleOnclick(e)} className="button-press">React.js</button>
                        {state==="React.js"&& <div className="slide"><p>Lorem ipsum dolo</p></div>}
                    </div>
            </div> */}
            <AccordionDemo/>
            <div class="about-achievements">
                <div class="about-achievement"><h1>10+</h1><p>YEARS OF EXPERIENCE</p></div>
                <hr/>
                <div class="about-achievement"><h1>90+</h1><p>PROJECTS COMPLETED</p></div> 
                <hr/>
                <div class="about-achievement"><h1>15+</h1><p>HAPPY CLIENTS</p></div>
            </div>
        


        </div>
    )
}