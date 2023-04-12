import React from 'react'
import '../../App.css'

export default function Resume() {

  return (
    <section className='container'>
      {/* <h2 className='title'>RESUME</h2> */}

      <div className='resume'>
        <h3 className="subtitle">my skills & experience</h3>
        <a href='/Resume.pdf' download='Devin Polichetti Resume'>
          <button id='downloadBtn' value='download' className='btn btn-success'>
            Download Resume
          </button>
        </a>
      </div>

    </section>
  )
}

