import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as firestore from 'firebase/firestore';
import { db } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {

    (async () => {

      const postRef = firestore.doc(db, 'posts', postId);

      firestore.onSnapshot(postRef, (doc) => {

        setPost(doc.data());

      });

    })();

  },[]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;