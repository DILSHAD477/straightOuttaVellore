import Navbar from "@/components/Navbar";
import "./page.css";
const page = () => {
  return (
    <div className="container">
      <div><Navbar />
      
        <iframe src="http://127.0.0.1:5500/ksp/components/test.html" title="W3Schools Free Online Web Tutorials"></iframe>
      </div>
    </div>
  )
}

export default page