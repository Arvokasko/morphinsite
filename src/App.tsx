import './App.css'
import { useState, useEffect } from 'react'
import Bottombar from './components/Bottombar'
import Hero from './components/Hero'
import Start from './components/Start'
import Middle from './components/Middle'

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    <Hero key="hero1" />,
    <Middle key="middle1" />,
    <Start key="start1" />,
  ]

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      isScrolling = true

      if (e.deltaY > 0) {
        // Scrolling down
        setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
      } else {
        // Scrolling up
        setCurrentPage((prev) => Math.max(prev - 1, 0))
      }

      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 600)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [pages.length])

  return (
    <>
      <Bottombar currentPage={currentPage} totalPages={pages.length} onPageChange={setCurrentPage} />
      <div className="pageContainer" key={currentPage}>
        {pages[currentPage]}
      </div>
    </>
  )
}

export default App
