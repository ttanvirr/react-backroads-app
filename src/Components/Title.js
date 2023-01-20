const Title = ({ title, titleColored }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{titleColored}</span>
      </h2>
    </div>
  )
}
export default Title
