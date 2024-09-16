import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import "./projects.css"
import Projectbox from "./ProjectBox";

function Projects(){
    return(
        <>
            <Header/>
            <h5><i><u>Projects</u></i></h5>
            <div className="content">
                <Projectbox
                    projectName='weatherApp' 
                    description='A React-based weather app fetching real-time data via API for quick, accurate weather updates'
                    technologies = {['React', 'API']}
                    projLink='https://github.com/Abayvm/mini-projects/blob/master/src/components/Weatherapp.jsx'
                    slideNo='1'
                    previewLink='https://mini-projects-chi.vercel.app/weatherapp'
                />
                <Projectbox
                    projectName='thefacebook register 2004'
                    description="The thefacebook project is a clone of Facebook's welcome page from 2004. It has been created using HTML and CSS to replicate the original design and provide a nostalgic experience for users."
                    projLink='https://github.com/Abayvm/thefacebook?tab=readme-ov-file'
                    slideNo='2'
                    previewLink='https://abayvm.github.io/thefacebook/'
                />
                <Projectbox
                    projectName='Todo App'
                    description='A React-powered to-do app for easy and efficient task management'
                    technologies={['React']}
                    projLink='https://github.com/Abayvm/mini-projects/blob/master/src/components/Todo.jsx'
                    slideNo='3'
                    previewLink='https://mini-projects-chi.vercel.app/todoapp'
                />
                
            </div>
            <Footer/>
        </>
    )
}

export default Projects;