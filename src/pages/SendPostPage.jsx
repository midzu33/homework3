import { useState } from "react"
import styles from './SendPostPage.module.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SendPostPage = () => {
  const [ postData, setPostData ] = useState({})
  const navigate = useNavigate()

  const handlePost = () => {
    const request = axios.post('https://dummyjson.com/posts/add', {
      title: postData?.value,
      userId: 5,
  })
  .then(res => res.json())
  .then(navigate('/'))
  console.log(request);
  }

  return (
    <div className={styles.main}>
      <label htmlFor="title">Введите заголовок</label>
      <input id="title" type="text" value={postData.value} onChange={e => setPostData({...postData, value: e.target.value})}/>
      <label htmlFor="title">Введите текст</label>
      <input id="body" type="text" value={postData.body} onChange={e => setPostData({...postData, body: e.target.value})}/>
      <button onClick={handlePost}>ОТПРАВИТЬ ПОСТ</button>
    </div>
  )
}

export default SendPostPage