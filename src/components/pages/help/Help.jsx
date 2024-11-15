import React, {useState} from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import "./help.css";
import manny from './helpseeker/manny.jpg';
import instagram from './helpseeker/instagram.png';
import X from './helpseeker/twitter.png';
import github from './helpseeker/github.png';
import linkedin from './helpseeker/linkedin.png';
import telegram from './helpseeker/telegram.png';

function Help(){
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:abayvmuraleedharan@gmail.com?body=${encodeURIComponent(body)}`;
    };

    const clearfield = () =>{
        setBody('')
    }

    return(
        <>
            <Header />
            <div className="helpseeker">
                <img src={manny} alt="stupidguy" className="manny-pfp"/>
                <div role="tooltip" className="is-top is-right balloon">There is <u><i>no way</i></u> a dumb person like me can create a website.</div>
            </div>
            <div className="promo">
                <span className="nway"><i>No way?</i></span>
                <span className="abay">Where there's <i>Abay</i>,</span>
                <span className="away">There's <i>A way </i>!</span>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="messenger">
                    <div>
                        <label htmlFor="body">Message: </label>
                        <textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Send me a message (do not spam)(please!?)"
                        />
                    </div>
                    <button type="submit" onClick={clearfield}>Send Email</button>
                </form>
                <div className="contacts">
                    <a href="https://www.instagram.com/abay_v_/"><img src={instagram} alt="instagram"/></a>
                    <a href="https://x.com/abay_v_/"><img src={X} alt="X"/></a>
                    <a href="https://github.com/abayvm"><img src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/abay-vm-445469246/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://t.me/bigdickabay"><img src={telegram} alt="telegram"/></a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Help;