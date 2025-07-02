import { useRef, useState } from 'react';
import { useData } from '../Context/AuthContext'
import { useNavigate } from 'react-router';

const Category = () => {
    // const {  categoryData } = useData()
    const scrollRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const navigate = useNavigate()
    const {apiData} = useData()



    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((elem) => {
          return elem[property]
        })
        newVal = [...new Set(newVal)]
        return newVal
      }

    const categoryData = getUniqueCategory(apiData,'category')


    // মাউস ডাউন
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    // মাউস ছেড়ে দিলে
    const handleMouseUp = () => {
        setIsDown(false);
    };

    // মাউস বাইরে গেলে
    const handleMouseLeave = () => {
        setIsDown(false);
    };

    // মাউস মুভ
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // স্ক্রল স্পিড
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className='bg-[#101829]'>
            <div className='container'>
                <div
                    ref={scrollRef}
                    className='flex flex-nowrap gap-5 items-baseline py-7 px-4 overflow-x-auto whitespace-nowrap cursor-grab select-none no-scrollbar'
                    style={{ userSelect: 'none' }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    {categoryData?.map((item, i) => {
                        return (
                            <div key={i} className=''>
                                <button onClick={()=>navigate(`/category/${item}`)} className='cursor-pointer w-[250px] text-nowrap text-white p-2 bg-gradient-to-r from-green-600 to-purple-600 rounded-lg text-lg font-semibold'>{item}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category