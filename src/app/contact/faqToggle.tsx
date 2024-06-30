'use client'

interface FaqToggleProps {
  question: string
  answer: string
  isOpen: boolean
  toggleFaq: () => void
}

function faqToggle({ question, answer, isOpen, toggleFaq }: FaqToggleProps) {
  return (
    <div>
      <button
        onClick={toggleFaq}
        className={`collapsed question para-style ${isOpen ? 'open' : ''}`}
      >
        {question}
        {isOpen ? (
          <i className="bi bi-chevron-up icon-close"></i>
        ) : (
          <i className="bi bi-chevron-down icon-show"></i>
        )}
      </button>

      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>{answer}</div>
    </div>
  )
}

export default faqToggle
