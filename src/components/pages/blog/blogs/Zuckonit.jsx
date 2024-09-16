import React from "react";
import Header from "../../../ui/Header";
import Footer from "../../../ui/Footer";
import "./blogs.css";

function Zuckonit(){
    return(        
        <>
        <Header />
        <h1 className="blog-head">Zuckonit</h1>
        <div className="blog-body">
        <p className="blog-date"><i>17-Sept-2024</i></p>
        <p>
        <i>8:13pm</i>.  Jessica Alona is a bitch. I need to think of something to make to take my mind off her I need to think of something to occupy my mind. 
        Easy enough now I just need an idea…
    </p>
    <p>
        <i>9:48pm</i>. I’m a little intoxicated, not gonna lie. So what if it’s not even 10pm and it’s a Tuesday night? What? The Kirkland facebook is open on my computer desktop and some of these people have pretty horrendous facebook pics.
        I almost want to put some of these faces next to pictures of farm animals and have people vote on which is more attractive. It’s not such a great idea and probably not even funny, but Billy comes up with the idea of comparing two people from the facebook, and only sometimes putting a farm animal in there. 
        Good call Mr. Olson! I think he’s onto something.
    </p>
    <p>
        <i>11:09pm</i>. Yea, it’s on. I’m not exactly sure how the farm animals are going to fit into this whole thing (you can’t really ever be sure with farm animals…), but I like the idea of comparing two people together. 
        It gives the whole thing a very Turing feel,since people’s ratings of the pictures will be more implicit than, say, choosing a number torepresent each person’s hotness like they do on hotornot.com. 
        The other thing we’regoing toneed is a lot of pictures. Unfortunately, Harvard doesn’t keep a public centralizedfacebookso I’m going to have to get all the images from the individual houses that people arein.And that means no freshman pictures…drats.
    </p>
    <p>
        <i>12:58pm</i>. Let the hacking begin. First on the list is Kirkland. They keepeverythingopen and allow indexes in their Apache configuration, so a little wget magic is allthat’snecessary to download the entire Kirkland facebook. Child’s play.
    </p>
    <p>
        <i>1:03am</i>. Next on the list is Eliot. They’re also open, but with no indexesinApache. I can run an empty search and it returns all of the images in the database inasingle page. Then I can save the page and Mozilla will save all the images for me.Excellent. Moving right along…
    </p>
    <p>
        <i>1:06am</i>. Lowell has some security. They require a username/password comboto access the facebook. I’m going to go ahead and say that they don’thave access to themain fas user database, so they have no way of knowing what people’s passwords are, andthe house isn’t exactly going to ask students for their fas passwords, 
        so it’s got to besomething else. Maybe there’s a single username/password combo that all of Lowellknows.That seems a little hard to manage since it would be impossible for the webmaster totellLowell residents how to figure out the username and password without giving them awaycompletely. And you do want people to know what kind of authentication is necessary,
        so it’s probably not that either. So what does each student have that can be used forauthenticationthat the house webmaster has access to? Student ids anyone? Suspicions affirmed –timeto get myself a matching name and student id combo for Lowell and I’m in. But therearemore problems. The pictures are separated into a bunch of different pages, 
        and I’mway toolazy to go through all of them and save each one. Writing a perl script to take careof thatseems like the right answer. Indeed.
    </p>
    <p>
        <i>1:31am</i>. Adams has no security, but limits the number of results to 20 a page.All I need to do is break out the same script I just used on Lowell and we’re set.
    </p>
    <p>
        <i>1:42am</i>. Quincy has no online facebook. What a sham. Nothing I can do aboutthat.
    </p>
    <p>
        <i>1:43am</i>. Dunster is intense. Not only is there no public directory, butthere’sno directory at all. You have to do searches, and if your search returns more than 20matches, nothing gets returned. 
        And once you do get results, they don’t link directlytothe images; they link to a php that redirects or something. Weird. This may bedifficult.I’ll come back later.
    </p>
    <p>
        <i>1:52am</i>. Leverett is a little better. They still make you search, but youcando an empty search and get links to pages with every student’s picture. 
        It’s slightlyobnoxious that they only let you view one picture at a time, and there’s no way I’mgoingto go to 500 pages to download pics one at a time, so it’s definitely necessary to break outemacs and modify that perl script. 
        This time it’s going to look at the directory andfigureout what pages it needs to go to by finding links with regexes. Then it’ll just go toallof the pages it found links to and jack the images from them. It’s taking a few triestocompile the script…another Beck’s is in order.
    </p>
    <p>
        <i>2:08am</i>. Mather is basically the same as Leverett, except they break theirdirectory down into classes. There aren’t any freshmen in their facebook…how weak.
    </p>
    </div>
    <Footer/>
        </>
    )
}

export default Zuckonit