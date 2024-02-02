import { useEffect, useState } from 'react';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(storedBookmarks);
    }, []);

    return (
        <div>
            <h1>Bookmarked Posts</h1>
            <ul>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id}>
                        <h2>{bookmark.title}</h2>
                        <p>{bookmark.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bookmarks;
