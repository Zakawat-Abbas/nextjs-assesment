import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';


const Home = ({ posts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const { page = 1 } = router.query;

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Link className='bookmark-link' href={`/bookmarks`}>
                Bookmarked Posts
            </Link>
            <PostList posts={posts} searchTerm={searchTerm} page={page} />
            <Pagination totalPages={Math.ceil(posts.length / 10)} currentPage={parseInt(page)} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default Home;
