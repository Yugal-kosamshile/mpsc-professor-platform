import React from 'react';

function Hero({ scrollToSection }) {
  return (
    <section className="container py-4">
      <div className="row g-4">
        
        {/* Left Side: Main Hero Content (Takes up 8/12 columns on medium+ screens) */}
        <div className="col-12 col-md-8">
          <div className="bg-white rounded-4 shadow-sm border p-4 p-md-5 h-100 position-relative overflow-hidden d-flex flex-column justify-content-center">
            
            {/* Decorative Background Element */}
            <div 
              className="position-absolute top-0 end-0 bg-warning rounded-circle opacity-25" 
              style={{ width: '150px', height: '150px', marginRight: '-50px', marginTop: '-50px' }}
            ></div>
            
            <h2 className="display-6 fw-bold text-dark mb-3 position-relative z-1">
              Master General Studies with <span className="text-primary">MPSC Professor</span>
            </h2>
            
            <p className="text-secondary mb-4 position-relative z-1 fs-5">
              Access the latest complete geography, polity, human anatomy, and physics lectures straight from the channel. We break down the syllabus into high-yield, one-shot sessions for upcoming exams.
            </p>
            
            <div className="d-flex flex-wrap gap-3 position-relative z-1">
              <button 
                onClick={() => scrollToSection('videos')} 
                className="btn btn-danger px-4 py-2 fw-medium d-flex align-items-center gap-2 shadow-sm"
              >
                ▶ Watch Latest Videos
              </button>
              <button 
                onClick={() => scrollToSection('dashboard')} 
                className="btn btn-outline-primary px-4 py-2 fw-medium"
              >
                View Exam Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Featured Lecture / Image Card (Takes up 4/12 columns) */}
        <div className="col-12 col-md-4">
          <div 
            className="text-white rounded-4 shadow-sm p-4 h-100 d-flex flex-column" 
            style={{ background: 'linear-gradient(to bottom right, #1e293b, #0f172a)' }}
          >
            <div className="mb-3">
              <h5 className="fw-bold mb-1">Featured Lectures</h5>
              <small className="text-light opacity-75">Notes on All Lectures</small>
            </div>
            
            {/* Image Area */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center rounded-3 overflow-hidden bg-white bg-opacity-10 p-2">
               {/* Ensure you have an actual image path here */}
               <img 
                 src="./hero1.png" 
                 alt="Maharashtra Geography Map" 
                 className="img-fluid rounded" 
                 style={{ objectFit: 'cover', width: '100%', height: '100%' }}
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;