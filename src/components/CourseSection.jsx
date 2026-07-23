import { useState } from "react";
import { FaLaptopCode, FaBrain, FaRobot } from "react-icons/fa";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";

function CourseSection() {
const [search,setSearch]=useState("");
const [category,setCategory]=useState("All");
const [selectedCourse,setSelectedCourse]=useState(null);
const courses=[
{id:1,icon:<FaLaptopCode/>,title:"Web Development",description:"Learn frontend, backend and build real-world projects.",tags:["HTML","CSS","React"],level:"Beginner",category:"Frontend"},
{id:2,icon:<FaBrain/>,title:"Data Structures & Algorithms",description:"Master DSA concepts for coding interviews.",tags:["C++","DSA","Problem Solving"],level:"Intermediate",category:"DSA"},
{id:3,icon:<FaRobot/>,title:"AI & Machine Learning",description:"Explore AI concepts and intelligent systems.",tags:["Python","ML","AI"],level:"Advanced",category:"AI"}];
const filteredCourses=courses.filter(course=>{
const q=search.toLowerCase();
return (course.title.toLowerCase().includes(q)||course.description.toLowerCase().includes(q)||course.category.toLowerCase().includes(q)||course.tags.some(t=>t.toLowerCase().includes(q)))&&(category==="All"||course.category===category);
});
return (
<section className="py-16 px-10 bg-white">
<h2 className="text-3xl font-bold text-center">Popular Courses</h2>
<p className="text-center mt-3 text-gray-600">Choose the right path to start your coding journey.</p>
<div className="flex justify-center mt-8"><input type="text" placeholder="Search by course name..." value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full max-w-lg border border-gray-300 rounded-full px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"/></div>
<div className="flex justify-center flex-wrap gap-4 mt-8">{["All","Frontend","DSA","AI"].map(item=><button key={item} onClick={()=>setCategory(item)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${category===item?"bg-orange-500 text-white shadow-lg":"bg-white border border-gray-300 hover:bg-orange-100"}`}>{item}</button>)}</div>
<div className="grid md:grid-cols-3 gap-8 mt-10">{filteredCourses.length?filteredCourses.map(course=><CourseCard key={course.id} icon={course.icon} title={course.title} description={course.description} tags={course.tags} level={course.level} onView={()=>setSelectedCourse(course)}/>):<p className="text-center col-span-3 text-gray-500 text-lg">No courses found.</p>}</div>
<CourseModal course={selectedCourse} onClose={()=>setSelectedCourse(null)}/>
</section>);
}
export default CourseSection;