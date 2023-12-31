import SingleQuestion from './SingleQuestion'

const QuestionsComponent = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </section>
  )
}
export default QuestionsComponent
