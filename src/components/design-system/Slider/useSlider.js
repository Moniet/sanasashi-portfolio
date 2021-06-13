import { useState } from 'react'

const sliderItems = [
  {
    imageLink: '/images/slider/p1.png',
    mobileImageLink: '/images/slider/p1-mobile.png',
    projectLink: '/case-studies/mirror',
    title: 'Mirror',
    category: 'Website Re-design',
    year: '2021',
  },
  {
    title: 'Phoenix',
    year: '2021',
    category: 'Responsive Re-design',
    imageLink: '/images/slider/p2.png',
    mobileImageLink: '/images/slider/p2-mobile.png',
    projectLink: '/case-studies/phoenix',
  },
  {
    title: 'Stream Net',
    year: '2021',
    category: 'App MVP  design',
    imageLink: '/images/case-study/stream-net-1.png',
    mobileImageLink: '/images/slider/p3-mobile.png',
    projectLink: '/case-studies/stream-net',
  },
  {
    title: 'Zoom',
    year: '2021',
    category: 'Website Re-design',
    imageLink: '/images/case-study/zoom-2.png',
    mobileImageLink: '/images/slider/p4-mobile.png',
    projectLink: '/case-studies/zoom',
  },
]
export const useSlider = () => {
  const [count, setCount] = useState(0)

  const sliderProps = {
    setCount,
    count,
    sliderItems,
  }

  return sliderProps
}
