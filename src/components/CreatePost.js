import * as firestore from 'firebase/firestore';
import {db} from '../firebase';
import {useFormInput} from './hooks';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  const posts = firestore.collection(db, 'posts');

  async function handleSubmit(e) {
    e.preventDefault();

    await firestore.addDoc(posts, {
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt : new Date()
    })


  } 

  return (  
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input  {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea style={{resize: "none"}} {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;