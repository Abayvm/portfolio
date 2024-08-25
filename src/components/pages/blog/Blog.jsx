import React, {useState} from "react";
import Header from "../../ui/Header"
import Footer from "../../ui/Footer";
import './blog.css';

function Blog(){
    const [selected, setSelected] = useState('blog'); 
    const blogs = [];

    /* Dummy blog post - replace with actual content later */

    let blog1 = "This works.";
    blogs.push(blog1)

    function clickHandler(tab){
        setSelected(tab);
    }

    return (
        <>
            <Header />
            <div className="content">
                <section className="tabs">
                    <menu role="tablist" aria-label="Tabs Template">
                        <button role="tab" aria-controls="Blog" aria-selected={selected === 'blog'} fdprocessedid="q645x" onClick={()=>clickHandler('blog')}>B l o g</button>
                        <button role="tab" aria-controls="Journal"  aria-selected={selected === 'jornal'} fdprocessedid="9rglcl" onClick={()=>clickHandler('journal')}>Journal</button>
                    </menu>
                    
                    <article role="tabpanel" id="tab-A" hidden={selected !== 'blog'} className="postfeild has-scrollbar">
                        <h3>Blogs</h3>
                        <p>{blog1}</p>
                    </article>
                    <article role="tabpanel" id="tab-B" hidden={selected !== 'journal'} className="postfeild"><h3>Welcome to my Live Journal✏️</h3></article>
                </section>
            </div>
            <Footer/>
        </>
    );

}

export default Blog;
