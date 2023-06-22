import Seo from "@/components/common/Seo"
import CourseGallary from "@/components/courses/CourseGallary"
import MainPage from "@/components/courses/MainPage"


function index() {
  return (
    <>
      <Seo pageTitle="Courses || RhinoGeeks" />
      <MainPage/>
      {/* course gallary */}
      <CourseGallary/>
    </>
  )
}

export default index