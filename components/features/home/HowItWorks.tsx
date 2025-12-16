
export const howItWorks = [
  {
    step: 1,
    title: "Write What You’re Learning",
    text: "Turn ideas into explanations.",
  },
  {
    step: 2,
    title: "Publish Your Article",
    text: "Attach images or videos to clarify and strengthen your explanation.",
  },
  {
    step: 3,
    title: "Share & Learn Together",
    text: "Share your post and learn from how others read, react, and respond.",
  }
]
const HowItWorks = () => {
  return (
   <section className="how-it-works container">
    <div className="how-it-works-header">
      <h2 className="how-it-works-title">How Sharkny Works</h2>
      <p className="how-it-works-subtitle">
        Learning sticks when you explain it.
      </p>
    </div>
  <div className="how-it-works-inner gap-8 grid grid-cols-1 md:grid-cols-3">
    {howItWorks.map((item) => (
      <div 
      key={item.step}
      className="how-it-works-steps">
      <div className="how-it-works-step">
        <span className="how-it-works-step-index">Step {item.step}</span>
        <h3 className="how-it-works-step-title">{item.title}</h3>
        <p className="how-it-works-step-text">{item.text}</p>
      </div>
    </div>
    ))}
  </div>
  </section>
  )
}

export default HowItWorks