import React, { useState } from 'react';

function Notes() {
  // 📚 MANUAL NOTES ARRAY
  // Just add a new block here whenever you want to upload a new PDF!
  const pdfNotes = [
    { 
      id: 1, 
      title: 'महाराष्ट्राचा भूगोल - राष्ट्रीय उद्याने', 
      subject: 'Geography', 
      fileSize: '2.4 MB', 
      dateAdded: 'Feb 10, 2026',
      filePath: '/notes/maharashtra-geography.pdf' // Place the actual PDF in your public/notes folder
    },
    { 
      id: 2, 
      title: 'भारतीय राज्यव्यवस्था - मूलभूत हक्क (Fundamental Rights)', 
      subject: 'Polity', 
      fileSize: '1.8 MB', 
      dateAdded: 'Feb 05, 2026',
      filePath: '/notes/polity-rights.pdf' 
    },
    { 
      id: 3, 
      title: 'Human Anatomy - Heart & Eye Structure (मराठी)', 
      subject: 'Science', 
      fileSize: '3.1 MB', 
      dateAdded: 'Jan 28, 2026',
      filePath: '/notes/human-anatomy.pdf' 
    },
    { 
      id: 4, 
      title: 'General Science - Physics (Light & Force)', 
      subject: 'Science', 
      fileSize: '1.5 MB', 
      dateAdded: 'Jan 20, 2026',
      filePath: '/notes/physics-basics.pdf' 
    }
  ];

  // Optional: State to filter notes by subject, just like your videos!
  const [filter, setFilter] = useState('All');
  
  const filteredNotes = filter === 'All' 
    ? pdfNotes 
    : pdfNotes.filter(note => note.subject === filter);

  return (
    <section id="notes" className="container py-5" style={{ scrollMarginTop: "80px" }}>
      
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h2 className="h3 fw-bold text-dark d-flex align-items-center gap-2 mb-1">
            <span className="text-primary fs-4">📄</span> Lecture Notes
          </h2>
          <p className="text-secondary mb-0 small">Download high-yield PDF summaries for your exams.</p>
        </div>

        {/* Note Filters */}
        <div className="d-flex gap-2 overflow-auto pb-2" style={{ whiteSpace: 'nowrap' }}>
          {['All', 'Geography', 'Polity', 'Science'].map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)} 
              className={`btn rounded-pill px-4 py-2 fw-medium text-sm ${filter === category ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div className="col" key={note.id}>
              <div className="card h-100 shadow-sm border-0 bg-light">
                <div className="card-body d-flex align-items-center p-4">
                  
                  {/* PDF Icon Background */}
                  <div className="bg-white rounded p-3 me-4 shadow-sm text-danger d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                      <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.568.051.105.022.234.085.274.179.039.094-.022.21-.13.284a1.14 1.14 0 0 1-.277.085zm-1.554-4.57c.071-.05.115-.098.135-.149.016-.041.02-.092.01-.148-.008-.05-.026-.1-.05-.14-.024-.04-.05-.07-.075-.092a.67.67 0 0 0-.15-.125.4.4 0 0 0-.175-.05.25.25 0 0 0-.15.025c-.05.025-.09.055-.12.085-.03.03-.055.06-.075.09a.6.6 0 0 0-.05.115c-.015.045-.025.09-.035.135-.01.045-.015.09-.02.135-.005.045-.01.09-.01.13a1.5 1.5 0 0 0 .01.125c.01.04.02.08.03.115.01.035.025.07.04.1.015.03.035.06.055.085.02.025.04.05.06.07.025.02.05.04.075.06.03.02.06.035.09.05.035.015.07.025.105.035.04.01.08.015.12.02.04.005.08.005.12.005a1.2 1.2 0 0 0 .12-.005c.04-.005.08-.01.12-.02.04-.01.07-.025.105-.035.03-.015.06-.03.09-.05a.5.5 0 0 0 .075-.06.3.3 0 0 0 .06-.07.4.4 0 0 0 .055-.085.6.6 0 0 0 .04-.1.7.7 0 0 0 .03-.115c.01-.04.02-.08.03-.125a1.5 1.5 0 0 0 .01-.13c0-.04-.005-.085-.01-.13-.005-.045-.015-.09-.02-.135a.6.6 0 0 0-.035-.135.6.6 0 0 0-.05-.115c-.02-.03-.045-.06-.075-.09a.25.25 0 0 0-.12-.085.4.4 0 0 0-.175-.05.67.67 0 0 0-.15.125c-.025.022-.05.052-.075.092-.024.04-.042.09-.05.14-.01.056-.006.107.01.148.02.051.064.099.135.149z"/>
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 1.5v3a.5.5 0 0 0 .5.5h3l-3.5-3.5zM4 1.5h5v3A1.5 1.5 0 0 0 10.5 6h3v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/>
                    </svg>
                  </div>

                  {/* Note Details */}
                  <div className="flex-grow-1">
                    <h6 className="fw-bold text-dark mb-1">{note.title}</h6>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className={`badge ${note.subject === 'Polity' ? 'bg-primary' : note.subject === 'Science' ? 'bg-info text-dark' : 'bg-success'} bg-opacity-10 text-dark border`}>
                        {note.subject}
                      </span>
                      <small className="text-muted">• {note.fileSize}</small>
                    </div>
                    <small className="text-muted d-block">Added: {note.dateAdded}</small>
                  </div>

                  {/* Download Button */}
                  <div className="ms-3">
                    <a 
                      href={note.filePath} 
                      download 
                      className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm hover-lift"
                      style={{ width: '45px', height: '45px', transition: 'transform 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} 
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      title="Download PDF"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5 text-muted">
            No notes available for this category yet.
          </div>
        )}
      </div>

    </section>
  );
}

export default Notes;