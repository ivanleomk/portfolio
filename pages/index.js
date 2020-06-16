import Link from 'next/link'
import StyledLink from '../components/StyledLink';
import { getSortedPostsData } from '../lib/posts'


const Home = ({ allPostsData }) => (
  <>
  <section className = "bg-blue-grey-100">
    <div style = {{height:"100vh"}}className = "flex flex-col items-center justify-center max-h-screen">
      <div className = "max-w-lg  text-left" style = {{fontFamily: "AdelleW01-Bold"}}>
        <span className = "text-xl text-black ">Hi I'm Ivan</span><br />
        <span className = "text-blue-grey-600 text-base">I code and work on fun <StyledLink url = "/projects" text ="projects" /> in my spare time. I also <StyledLink url ="#blog" text = "blog" /> and run a <StyledLink url = '/podcast' text = "podcast" /> about Software Engineering. If you're interested in hiring me, check out my <StyledLink url = "/work" text = "work" />.</span>
      </div>
      
      <button 
      style = {{outline:"none"}}
      className="bg-blue-grey-200 hover:bg-blue-500 text-black font-semibold py-2 my-12 px-4 rounded shadow  transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover: transform hover:scale-110">
        <div className = "flex flex-col items-center justify-center ">
          Find Out More
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
        </div>
        
      </button>
      
    </div>
    
  </section>
  <section className = "flex flex-col items-center justify-start p-4" id = "blog" style = {{height:"100vh"}}>
    <div>
    <span className = "text-xl text-blue-grey-900 my-4">
      My Posts
    </span>
    <div className = "my-2">
      {allPostsData.map(({ id, date, title }) => (
              <Link href = '/posts/[id]' as={`/posts/${id}`}>
                <p className = "cursor-pointer underline">{title} | {date}</p>
              </Link>
              
            ))}
    </div>
    
    </div>
    
  </section>
  </>
);

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home;