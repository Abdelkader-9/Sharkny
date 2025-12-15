import React from 'react'

const HowItWorks = () => {
  return (
   <section className="how-it-works container">
    <div className="how-it-works-header">
      <h2 className="how-it-works-title">How Sharkny Works</h2>
      <p className="how-it-works-subtitle">
        Learning sticks when you explain it.
      </p>
    </div>
  <div className="how-it-works-inner gap-6 grid grid-cols-1 md:grid-cols-3">
    <div className="how-it-works-steps">
      <div className="how-it-works-step">
        <span className="how-it-works-step-index">Step 1</span>
        <h3 className="how-it-works-step-title">Write What You’re Learning</h3>
        <p className="how-it-works-step-text">Turn ideas into explanations.</p>
      </div>
    </div>
    <div className="how-it-works-steps">
      <div className="how-it-works-step">
        <span className="how-it-works-step-index">Step 2</span>
        <h3 className="how-it-works-step-title">Publish Your Article</h3>
        <p className="how-it-works-step-text">Attach images or videos to clarify and strengthen your explanation.</p>
      </div>
    </div>
    <div className="how-it-works-steps">
      <div className="how-it-works-step">
        <span className="how-it-works-step-index">Step 3</span>
        <h3 className="how-it-works-step-title">Share & Learn Together</h3>
        <p className="how-it-works-step-text">Share your post and learn from how others read, react, and respond.</p>
      </div>
    </div>
  </div>
  </section>
  )
}

export default HowItWorks