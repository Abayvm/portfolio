function Projectbox(props){
    return(
        <>
            <div class="window" style={{maxWidth: '320px'}}>
                <div class="title-bar">
                    <div class="title-bar-text">{props.projectName}</div>
                </div>
                <div class="window-body has-space">
                    <p>{props.description}</p>
                    <ul>
                        {(props.technologies || []).map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div class="status-bar">
                    <p class="status-bar-field"><a href={props.projLink}>Source Code</a></p>
                    <p class="status-bar-field">Slide 1</p>
                    <p class="status-bar-field">CPU Usage: 14%</p>
                </div>
            </div>
        </>
    )
}

export default Projectbox