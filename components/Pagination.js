import Link from 'next/link';

const Pagination = ({ totalPages, currentPage }) => {
    return (
        <div className='page-navigation'>
            {currentPage > 1 && <Link className='page-navigation-buttons' href={`/?page=${currentPage - 1}`}>Previous</Link>}
            {currentPage < totalPages && <Link className='page-navigation-buttons' href={`/?page=${currentPage + 1}`}>Next</Link>}
        </div>
    );
};

export default Pagination;
