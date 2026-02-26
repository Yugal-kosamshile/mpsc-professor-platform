import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="container py-5" style={{ scrollMarginTop: "80px" }}>
      
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="h3 fw-bold text-dark d-flex align-items-center justify-content-center gap-2 mb-2">
          <span className="text-primary fs-4">🎯</span> About Us
        </h2>
        <p className="text-secondary">Democratizing competitive exam preparation across Maharashtra.</p>
      </div>

      {/* Mission & Vision Section */}
      <div className="row align-items-center mb-5 pb-4">
        <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
          <h3 className="fw-bold text-dark mb-3">Our Mission</h3>
          <p className="text-secondary" style={{ lineHeight: '1.8' }}>
            At <strong>MPSCProfessor</strong>, we believe that high-quality education should be accessible to every aspirant, regardless of their location or background. Preparing for MPSC, UPSC, and State Board exams requires strategy, exactness, and honest analysis. 
          </p>
          <p className="text-secondary mb-4" style={{ lineHeight: '1.8' }}>
            We break down massive syllabuses—from Maharashtra Geography and Indian Polity to Human Anatomy and Physics—into high-yield, one-shot sessions. Our goal is to empower you with free video lectures, downloadable PDF notes, and accurate exam intelligence so you can secure your path to administration.
          </p>
          
          {/* Quick Stats */}
          <div className="row g-3 mt-2">
            <div className="col-sm-4">
              <div className="bg-primary bg-opacity-10 rounded p-3 text-center border border-primary border-opacity-25">
                <h4 className="fw-bold text-primary mb-0">100%</h4>
                <small className="text-dark fw-medium">Free Content</small>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-success bg-opacity-10 rounded p-3 text-center border border-success border-opacity-25">
                <h4 className="fw-bold text-success mb-0">Daily</h4>
                <small className="text-dark fw-medium">MCQs & Updates</small>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bg-info bg-opacity-10 rounded p-3 text-center border border-info border-opacity-25">
                <h4 className="fw-bold text-info mb-0">24/7</h4>
                <small className="text-dark fw-medium">Access to Notes</small>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side Illustration / Image */}
        <div className="col-lg-6">
          <div className="rounded-4 overflow-hidden shadow-sm position-relative">
            {/* Replace with an actual photo of a classroom, study desk, or your channel banner */}
            <div className="bg-light ratio ratio-4x3 d-flex align-items-center justify-content-center">
              <img 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop" 
                alt="Study and Preparation" 
                className="object-fit-cover w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="text-secondary opacity-25 my-5" />

      {/* Meet the Team Section */}
      <div className="text-center mb-5">
        <h3 className="fw-bold text-dark mb-2">Meet the Educators</h3>
        <p className="text-secondary">The minds behind the content and platform.</p>
      </div>

      <div className="row justify-content-center g-4">
        
        {/* Profile 1: Aniket */}
        <div className="col-12 col-md-5">
          <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div className="mx-auto mb-3">
              <img 
                src="/aniket-profile.jpg" // Add actual image path
                alt="Aniket M. Bhendarkar" 
                className="rounded-circle object-fit-cover border border-4 border-light shadow-sm" 
                style={{ width: '120px', height: '120px' }}
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Aniket+Bhendarkar&background=0D8ABC&color=fff&size=120' }}
              />
            </div>
            <h5 className="fw-bold text-dark mb-1">Aniket M. Bhendarkar</h5>
            <p className="text-primary small fw-medium mb-3">Lead Educator & Analyst</p>
            <p className="text-secondary small mb-0">
              Specializing in Geography and Indian Polity. Aniket breaks down complex administrative concepts into easily digestible strategies for competitive exam aspirants.
            </p>
          </div>
        </div>

        {/* Profile 2: Yugal */}
        <div className="col-12 col-md-5">
          <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div className="mx-auto mb-3">
              <img 
                src="/yugal-profile.jpg" // Add actual image path
                alt="Yugal Y. Kosamshile" 
                className="rounded-circle object-fit-cover border border-4 border-light shadow-sm" 
                style={{ width: '120px', height: '120px' }}
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Yugal+Kosamshile&background=0d6efd&color=fff&size=120' }}
              />
            </div>
            <h5 className="fw-bold text-dark mb-1">Yugal Y. Kosamshile</h5>
            <p className="text-primary small fw-medium mb-3">Co-Founder & Technical Lead</p>
            <p className="text-secondary small mb-0">
              Blending technology with education. Yugal manages the digital platform infrastructure and creates specialized instructional content for General Science modules.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default AboutUs;