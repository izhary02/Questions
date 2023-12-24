import data from './data'
import { useState } from 'react'
import QuestionsComponent from './QuestionsComponent'

const App = () => {
  const [questions, setAllQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    activeId === id ? setActiveId(null) : setActiveId(id)
  }
  return (
    <main>
      <QuestionsComponent
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}
export default App
