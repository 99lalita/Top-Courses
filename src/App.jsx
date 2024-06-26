import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import {filterData,apiUrl} from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



function App() {

  const[courses,setCourses] = useState([]);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title);
  
  async function fetchData() {

    setLoading(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(e) {
      toast.e("Network error");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">

        <div >
          <Navbar/>
        </div>
        
        <div >
          <div>
            <Filter 
            setCategory = {setCategory}
            category = {category}
            filterData = {filterData}
            />
          </div>
          
          <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner/>):(<Cards category = {category} courses= {courses}/>)
            }
            
          </div>
        </div>

        
        

    </div>
  );
}

export default App;
