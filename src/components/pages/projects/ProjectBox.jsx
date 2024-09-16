function Projectbox(props){
    return(
        <>
            <div className="window" style={{maxWidth: '320px'}}>
                <div className="title-bar">
                    <div className="title-bar-text">{props.projectName}</div>
                </div>
                <div className="window-body has-space">
                    <p>{props.description}</p>
                    <ul>
                        {(props.technologies || []).map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="status-bar">
                    <p className="status-bar-field"><a href={props.projLink}>Source Code</a></p>
                    <p className="status-bar-field">Slide {props.slideNo}</p>
                    <p className="status-bar-field">CPU Usage: 14%</p>
                </div>
            </div>
        </>
    )
}

export default Projectbox