import { Link } from 'react-router-dom'
import { useState } from 'react'
import img1 from '../../../../assets/swiggy 1.avif'
import img2 from '../../../../assets/swiggy 2.avif'
import img3 from '../../../../assets/swiggy 3.avif'

const BANNERS = [
    { to: '/offers',            src: img1, alt: 'Offers'         },
    { to: '/search?q=special',  src: img2, alt: "Today's Special" },
    { to: '/sign-in',              src: img3, alt: 'Help'            },
]

const HomeCategories = () => {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(c => (c - 1 + BANNERS.length) % BANNERS.length)
    const next = () => setCurrent(c => (c + 1) % BANNERS.length)

    return (
        <div className='w-full bg-[#171a29] h-[340px] flex items-center justify-center gap-4 px-10 py-1'>

            {/* Mobile: slider */}
            <div className="relative w-full h-full sm:hidden flex items-center">
                <button onClick={prev} className="absolute left-0 z-10 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ‹
                </button>
                <Link to={BANNERS[current].to} className="w-full h-[95%] rounded-xl overflow-hidden block" style={{ borderRadius: '12px' }}>
                    <img src={BANNERS[current].src} alt={BANNERS[current].alt} className="w-full h-full object-contain" />
                </Link>
                <button onClick={next} className="absolute right-0 z-10 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    ›
                </button>
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {BANNERS.map((_, i) => (
                        <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`} />
                    ))}
                </div>
            </div>

            {/* Desktop: all 3 side by side */}
            <div className="hidden sm:flex w-full h-full items-center gap-4">
                {BANNERS.map((b) => (
                    <Link key={b.alt} to={b.to} className="flex-1 h-[95%] rounded-xl overflow-hidden" style={{ borderRadius: '12px' }}>
                        <img src={b.src} alt={b.alt} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default HomeCategories
