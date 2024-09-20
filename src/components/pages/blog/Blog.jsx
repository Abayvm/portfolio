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
                    <div className="blog1">
                        <a href="/blog/happy-always">
                            <h3 className="title">happy-always</h3>
                            <p className="date">21-sept-2024</p>
                        </a>
                    </div>
                    <div className="blog2">
                        <a href="/blog/zuckonit">
                            <h3 className="title">zuckonit</h3>
                            <p className="date">17-Sept-2024</p>
                        </a>
                    </div>
                    <div className="blog3">
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

