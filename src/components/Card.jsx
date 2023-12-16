const Card = (props) => {
    return (
        <div className="project_card">

            <div className="img_card">
                <img src={props.data.image} alt={props.data.name} />
            </div>
            <div>
                <h3> {props.data.name} </h3>
                <p>
                    {props.data.tags.map((tag) => {
                        return (
                            <span key={tag}> {tag} </span>
                        )
                    })}
                </p>

            </div>
        </div>
    )
}
export default Card