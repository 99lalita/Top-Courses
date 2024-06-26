import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {

    
    let course = props.course;
    let liked = props.liked;
    let setLiked = props.setLiked;
    



    function clickHandler() {
        // Logic
        if (liked.includes(props.course.id)) {
            // pahle se liked 
            setLiked((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (liked.length === 0) {
                setLiked([props.course.id]);
            }
            else {
                setLiked((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (

        <div className="w-[300px] bg-bgDark rounded-sm overflow-hidden bg-opacity-80">
            
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}/>

                <div className="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            liked.includes(course.id) ?  (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>) 
                        }
                    </button>
                </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-medium leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100) + '...'):(course.description) 
                    }
                </p>
            </div>
            
        </div>
    )
}

export default Card;