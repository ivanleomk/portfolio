import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'


export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      
      <article id = "article" className = "flex flex-col items-center justify-center">
        <div className = "max-w-xl">
        <span className = "text-lg">{postData.title} | <Date dateString={postData.date} /></span>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  
        </div>
        
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}