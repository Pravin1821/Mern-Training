import Course from "./Course";
function Courselist(){
    const courses = [
        {
            id:1,
            name: "HTML Full Course",
            rate: "Rating: 4.5"
        },
        {
            id:2,
            name: "CSS Full Course",
            rate: "Rating: 4.7"             
        },
        {
            id:3,
            name: "JS Full Course", 
            rate: "Rating: 4.8"
        },
        { 
            id:4,
            name: "Java Full Course",
            rate: "Rating: 4.9"
        }
    ];
    const courseList = courses.map((course,index) => <Course key= {index} name={course.name} rate={course.rate} />);
    return(
        <>
        {courseList}
        </>

    );
}

export default Courselist;