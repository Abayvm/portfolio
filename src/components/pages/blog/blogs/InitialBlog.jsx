import React from "react";
import Header from "../../../ui/Header";
import Footer from "../../../ui/Footer";
import "./blogs.css"

function InitialBlog(){
    return(
        <>
            <Header />

            <h1 className="blog-head">initial blog</h1>
            <div className="blog-body">
                <p className="blog-date"><i>28-Aug-2024</i></p>
                <p>
                    I have no idea what to write here or why I made this. Anyway I'm here now.<br /> I bought this domain <i>abayyy.xyz</i> couple weeks ago
                    from goDaddy and made this website using React.js. Hosted it on <i>vercel</i>. You can check the code out here on <i><a href="https://github.com/Abayvm/portfolio" target="_blank" rel="noreferrer">github</a></i>.
                    <br/>
                    I often look at other blogs, and I never even thought about how few people create their own, rather than read others blogs. Maybe I'll blog
                    about programming, books I read, movies I watch and about things I find interesting. <br />I hope I won't stop blogging because I'm a massive degenerate who pushes responsibilty than code..
                </p>
            </div>

            <Footer />
        </>
    )
}

export default InitialBlog;