import React from "react";
import Header from "../../ui/Header"
import Footer from "../../ui/Footer";
import "./blog.css"

function Blog(){

    return (
        <>
            <Header />
            <div >
                <h2><i><u>Blogs</u></i></h2>
                <br/>
                <div className="blogs">
                    <div className="blog">
                        <a href="/blog/initial-blog">
                            <h3 className="title">initial blog</h3>
                            <p className="date">28-Aug-2024</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );

}

export default Blog;

