import { useParams } from "react-router-dom";

function AuthorPage() {

  const { author } = useParams();

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      
      <h1>Author</h1>

      <p>
        Author page: <strong>{decodeURIComponent(author)}</strong>
      </p>

      <p>
        This page will show the author's articles in the future.
      </p>

    </div>
  );
}

export default AuthorPage;