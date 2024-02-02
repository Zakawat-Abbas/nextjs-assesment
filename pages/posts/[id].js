import PostDetail from '../../components/PostDetail';

const PostPage = ({ post }) => {
    return (
        <div>
            <PostDetail post={post} />
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export default PostPage;
