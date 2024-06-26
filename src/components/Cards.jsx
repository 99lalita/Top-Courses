import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;
    const [liked,setLiked] = useState([]);

    // reurns list of all courses from api response
    const getCourses = () => {
        if(category === "All") {
            // console.log(courses);
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseValue => {
                    allCourses.push(courseValue);
                })
            })
            
            return allCourses;
        }
        else {
            // specific card category data will pe passed
            return courses[category];
        }
     
    }

    return(
      <div className="flex justify-center  flex-wrap gap-4 mb-4" >


        {
            getCourses().map( (course) => {
                    
                return <Card
                key = {course.id} 
                course = {course}
                liked= {liked}
                setLiked= {setLiked}
                />
                    
                })
        }

        
      </div>  
    );
}

export default Cards;