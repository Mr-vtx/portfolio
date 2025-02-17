import { useParams } from "react-router-dom"; 

const BlogPostDetail = () => {
  const { postId } = useParams(); 
  const [post] = useState({
    id: postId,
    title: "Understanding JavaScript Closures",
    content:
      "Full post content goes here. It will be much longer and more detailed.",
    date: "Feb 16, 2025",
    image: "path/to/your/image1.jpg", 
  });

  return (
    <section className="blog-post py-24 px-8 bg-primary-color text-text-color">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-semibold mb-4 text-accent-color">
        {post.title}
      </h1>
      <span className="text-sm text-gray-400 mb-6">{post.date}</span>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </section>
  );
};

export default BlogPostDetail;
