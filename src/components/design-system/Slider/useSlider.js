import { useState } from 'react'

const sliderItems = [
  {
    imageLink: '/images/slider/p1.png',
    mobileImageLink: '/images/slider/p1-mobile.png',
    projectLink: '/case-studies/mirror',
    title: 'Mirror',
    year: '2021',
  },
  {
    title: 'Pheonix',
    year: '2021',
    category: 'Website Re-design',
    imageLink: '/images/slider/p2.png',
  },
  {
    imageLink: '/images/slider/p2.png',
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
