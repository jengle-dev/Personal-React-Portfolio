import React from 'react';

const About = () => {
  return (
    <div>
      <div className='aboutMe'>
        <div className='aboutTitle container'>A Brief History</div>
      </div>
      <div className='aboutInfo'>
        <p>I studied Graphic Design at Drake University and received my BFA in 2007. I started right away as a Pre-press Designer for a small printing company in Des Moines, IA.</p>
        <p> After my 2nd design job, I had learned that fixing other people's digital art and documents wasn't helping me grow. I also learned that "art-on-demand" wasn't something I was able to keep up with and enjoy. 2 years into the journey, I moved from Iowa back home to Kansas.
        </p>
        <p> An indirect path from a Graphic Design degree to selling insurance and then participating in a hack-a-thon at a previous employer's event, I caught the coding "bug".</p>
        <p>I've worked as an IT business partner for many years, a subject matter expert (SME) for many projects including robotic process automation (RPA). I've finally decided being a partner and SME on the business side isn't enough. I want to be solving the problems and helping business teams come up with the solutions they haven't considered yet.</p>
      </div>
      <div className='aboutInfo socialMedia'>
        <h5>Contact & Social Media Links</h5>
        <ul>
          <li>Email: <a href="mailto:j.engle.dev@gmail.com">j.engle.dev@gmail.com</a></li>
          <li>Github: <a href="https://github.com/jengle-dev" target="_blank">jengle-dev</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/jennifer-engle" target="_blank">jennifer-engle</a></li>
          <li>Instagram: <a href="https://instagram.com/jengle2984/" target="_blank">Personal Account</a></li>
          {/* <li>Instagram: Creative Hullaballoo</li> */}
        </ul>
      </div>
    </div>
  )
}

export default About;