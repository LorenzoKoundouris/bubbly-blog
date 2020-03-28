import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>My Post</h1>
      <p>Post: {id}</p>
    </>
  );
};

export default Post;
