const Course = () =>{
    return(
        <>
        <div className="main">
          <div className="submain">
          <form>
            <div>
            <div className="coursename">
            <label>Course Name</label>
            <input type="text"/>
            </div>
            <div className="courseduration">
            <label>Course Duration</label>
            <input type="text"/>
            </div>
            <div className="courseid">
            <label>Course id </label>
            <input type="text"></input>
            </div>
            <div className="login">
            <button type="submit">Submit</button>
            </div>
            </div>
          </form>
        </div>
        </div>
        
        </>
    );
}
export default Course;