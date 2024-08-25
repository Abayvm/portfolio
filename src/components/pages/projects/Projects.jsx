import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import "./projects.css"
import Projectbox from "./ProjectBox";

function Projects(){
    return(
        <>
            <Header/>
            <h2>Projects</h2>
            <div className="content">
                <Projectbox
                    projectName='weatherApp' 
                    description='A React-based weather app fetching real-time data via API for quick, accurate weather updates'
                    technologies = {['React', 'API']}
                    projLink='https://github.com/Abayvm/mini-projects/blob/master/src/components/Weatherapp.jsx'
                />
                <Projectbox
                    projectName='Todo App'
                    description='A React-powered to-do app for easy and efficient task management'
                    technologies={['React']}
                    projLink='https://github.com/Abayvm/mini-projects/blob/master/src/components/Todo.jsx'
                />
            </div>
            <Footer/>
        </>
    )
}

export default Projects;