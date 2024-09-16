import React from "react"; 
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import "./home.css";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="name">
                    <h1>Abayyy</h1>
                </div>
                <div className="content">
                    <div className="description">
                        <div className="basicInfo">
                        {/* <h4>
                            <span className="primary">De</span>
                            <span className="secondary">veloper</span>
                        </h4> */}
                        <div className="main">dev<span>.</span></div>
                            <div className="languages">
                                <p><i><code>Javascript(node.js)</code></i> </p>
                            </div>
                        </div>
                        <div className="aboutMe">
                            <p> I'm Abay, your friendly neighborhood 🕸️ developer. If you 
                                are not here by accident feel free to check out my <a href="/blog">blogs</a> and <a href="/projects">projects</a>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer className="foot"/>
            </>
        );
    }
}

export default Home;
