import * as firestore from 'firebase/firestore';
import {db} from '../firebase';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const [posts , setPosts] = useState([]);

    useEffect(()=>{

      (async()=>{
        const postsCollection = firestore.collection(db, 'posts');
        const snapShot = await firestore.getDocs(postsCollection);

        const posts = snapShot.docs.map((doc)=>{
          return {
            id: doc.id,
            ...doc.data() 
          }
        });

        setPosts(posts);
      })();

    },[]);
     
    
    return (
      <div className="home">
         <h1>Tech Blog</h1>
         <div id="blog-by">By Aman</div>

         {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
 
          <p>{post.subTitle}</p>
        </div>
      ))}

      </div>
    );
  }
  
  export default Home;