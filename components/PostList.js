import Link from 'next/link';
import { useState } from 'react';

const PostList = ({ posts, searchTerm, page }) => {
    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

    const [bookmarks, setBookmarks] = useState(
        isLocalStorageAvailable
            ? JSON.parse(localStorage.getItem('bookmarks')) || []
            : []
    );

    const handleBookmark = (post) => {
        const updatedBookmarks = [...bookmarks, post];
        setBookmarks(updatedBookmarks);

        isLocalStorageAvailable &&
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    };

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageSize = 10;
    const currentPagePosts = filteredPosts.slice((page - 1) * pageSize, page * pageSize);

    return (
        <ul className='posts'>
            {currentPagePosts.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body.slice(0, 40)}...</p>
                    </Link>
                    <button onClick={() => handleBookmark(post)} >Bookmark</button>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
