import Image from './assets/react.svg';

function Course(props){
    return(
        <>
        <div className="card">
            <img src={Image} alt="React-image" />
            <h3>{props.name}</h3>
            <p>{props.rate}</p>
        </div>
        </>
    )
}

Course.defaultProps={
    name:"React Full Course",
    rate:"Rating: 4.8"
}

export default Course;