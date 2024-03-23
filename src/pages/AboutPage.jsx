import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from './AboutPage.module.css'

const AboutPage = () => {
  const params = useParams();
  const [ post, setPost ] = useState({})
  const [ data, setData ] = useState([])

  useEffect(() => {
    if(params.id){
      axios.get(`https://dummyjson.com/posts/${params.id}/comments`)
      .then(r => setData(r.data.comments))
    }
  },[])

  useEffect(() => {
    if(params.id){
      axios.get(`https://dummyjson.com/posts/${params.id}`)
      .then(r => setPost(r.data))
    }
  },[])

  return (
    <div className={styles.main}>
      <div className={styles.post}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      {data.map(el => 
      (<div key={el.id} className={styles.comment}>
        <b>Комментарий пользователя: {el.user.username}</b>
        <p>{el.body}</p>
      </div>)
        )}
    </div>
  )
}

export default AboutPage