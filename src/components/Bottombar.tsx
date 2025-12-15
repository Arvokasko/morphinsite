import "../styles/Bottombar.css"

interface BottombarProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Bottombar({ currentPage, totalPages, onPageChange }: BottombarProps) {
    const segments = Array.from({ length: totalPages }, (_, i) => `Segment ${i + 1}`)

    return (
        <div className="mainContainer">
            <div className="bottomContainer">
                {segments.map((segment, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index)}
                        className={currentPage === index ? 'active' : ''}
                    >
                        {segment}
                    </button>
                ))}
            </div>
        </div>
    )
}
