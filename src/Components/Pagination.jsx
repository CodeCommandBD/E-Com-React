import React from 'react'

const getpages = (current, total) => {
    console.log(total);
    
    const pages = [];
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...',total)
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total)
        } else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total)
        }
    }
    return pages
}

const Pagination = ({ page, dynamicPage, pageHandle }) => {
    return (
        <div className='mt-10 space-x-4'>
            <button
                disabled={page === 1}
                className={`${page === 1 ? "bg-purple-400" : "bg-purple-900 "} py-2 px-4 text-white rounded-lg cursor-pointer font-semibold`}
                onClick={() => { pageHandle(page - 1)}}
            >Prev</button>
            {
                getpages(page, dynamicPage)?.map((item, i) => {
                    return (
                        
                            <span key={i}
                                onClick={() => typeof item === 'number' && pageHandle(item)}
                                className={`cursor-pointer ${item === page ? 'font-bold text-green-600' : ''} `}
                            >
                                {item}
                            </span>
                        
                    )
                })
            }
            <button
                onClick={()=>pageHandle(page + 1)}
                disabled={page === dynamicPage}
                className={`${page === dynamicPage ? "bg-purple-400" : "bg-purple-900 "} py-2 px-4 text-white rounded-lg cursor-pointer font-semibold`}
            >Next</button>
        </div>
    )
}

export default Pagination