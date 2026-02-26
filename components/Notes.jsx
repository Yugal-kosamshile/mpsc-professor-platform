import React, { useState } from 'react';

function Notes() {
  // 📚 MANUAL NOTES ARRAY (Only your 16 exact PDFs)
  const pdfNotes = [
    // === GEOGRAPHY (भूगोल) ===
    { 
      id: 1, 
      title: 'महाराष्ट्र जिल्हे पुनर्रचना', 
      subject: 'Geography', 
      fileSize: '1.4 MB', 
      dateAdded: 'Feb 26, 2026',
      filePath: '/notes/महाराष्ट्र_जिल्हे_पुनर्रचना.pdf' 
    },
    { 
      id: 2, 
      title: 'महाराष्ट्रातील राष्ट्रीय उद्याने', 
      subject: 'Geography', 
      fileSize: '2.1 MB', 
      dateAdded: 'Feb 26, 2026',
      filePath: '/notes/महाराष्ट्रातील_राष्ट्रीय_उद्याने.pdf' 
    },
    { 
      id: 3, 
      title: 'महाराष्ट्रातील शिखरे', 
      subject: 'Geography', 
      fileSize: '1.2 MB', 
      dateAdded: 'Feb 25, 2026',
      filePath: '/notes/महाराष्ट्रातील_शिखरे.pdf' 
    },

    // === POLITY (राज्यव्यवस्था) ===
    { 
      id: 4, 
      title: 'घटना निर्मिती - भाग 1', 
      subject: 'Polity', 
      fileSize: '1.8 MB', 
      dateAdded: 'Feb 25, 2026',
      filePath: '/notes/घटना_निर्मिती_part1.pdf' 
    },
    { 
      id: 5, 
      title: 'संविधान सभेतील 15 महिला सदस्य', 
      subject: 'Polity', 
      fileSize: '1.1 MB', 
      dateAdded: 'Feb 24, 2026',
      filePath: '/notes/संविधान_सभेतील_सर्व_१५ महिला_सदस्य.pdf' 
    },
    { 
      id: 6, 
      title: 'संविधान समित्या', 
      subject: 'Polity', 
      fileSize: '1.3 MB', 
      dateAdded: 'Feb 24, 2026',
      filePath: '/notes/संविधान_समित्या.pdf' 
    },

    // === SCIENCE (विज्ञान) ===
    { 
      id: 7, 
      title: 'Atom Structure (अणू)', 
      subject: 'Science', 
      fileSize: '1.5 MB', 
      dateAdded: 'Feb 26, 2026',
      filePath: '/notes/Atom.pdf' 
    },
    { 
      id: 8, 
      title: 'Cell Biology (पेशी)', 
      subject: 'Science', 
      fileSize: '1.7 MB', 
      dateAdded: 'Feb 26, 2026',
      filePath: '/notes/Cell.pdf' 
    },
    { 
      id: 9, 
      title: 'Electric Current (विद्युत धारा)', 
      subject: 'Science', 
      fileSize: '1.4 MB', 
      dateAdded: 'Feb 25, 2026',
      filePath: '/notes/Electric_Current.pdf' 
    },
    { 
      id: 10, 
      title: 'Light & Optics (प्रकाश)', 
      subject: 'Science', 
      fileSize: '1.9 MB', 
      dateAdded: 'Feb 25, 2026',
      filePath: '/notes/Light.pdf' 
    },
    { 
      id: 11, 
      title: 'Magnetism Principles (चुंबकत्व)', 
      subject: 'Science', 
      fileSize: '1.3 MB', 
      dateAdded: 'Feb 24, 2026',
      filePath: '/notes/Magnetism.pdf' 
    },
    { 
      id: 12, 
      title: 'Motion and Its Types (गती आणि प्रकार)', 
      subject: 'Science', 
      fileSize: '1.6 MB', 
      dateAdded: 'Feb 24, 2026',
      filePath: '/notes/Motiona_and_Types.pdf' 
    },
    { 
      id: 13, 
      title: 'Power and Force (बल आणि ऊर्जा)', 
      subject: 'Science', 
      fileSize: '1.2 MB', 
      dateAdded: 'Feb 23, 2026',
      filePath: '/notes/Power_and_Force.pdf' 
    },
    { 
      id: 14, 
      title: 'Sound Waves (ध्वनी)', 
      subject: 'Science', 
      fileSize: '1.4 MB', 
      dateAdded: 'Feb 23, 2026',
      filePath: '/notes/Sound.pdf' 
    },
    { 
      id: 15, 
      title: 'Units and Measurements (एकके आणि मोजमाप)', 
      subject: 'Science', 
      fileSize: '1.1 MB', 
      dateAdded: 'Feb 22, 2026',
      filePath: '/notes/Unit_and_Measurements.pdf' 
    },
    { 
      id: 16, 
      title: 'Work and Energy (कार्य आणि ऊर्जा)', 
      subject: 'Science', 
      fileSize: '1.5 MB', 
      dateAdded: 'Feb 22, 2026',
      filePath: '/notes/Work_and_Energy.pdf' 
    }
  ];

  const [filter, setFilter] = useState('All');
  
  // Filter logic based on the buttons clicked
  const filteredNotes = filter === 'All' 
    ? pdfNotes 
    : pdfNotes.filter(note => note.subject === filter);

  return (
    <section id="notes" className="container py-5" style={{ scrollMarginTop: "100px" }}>
      
      {/* Header & Filter Buttons Area */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
        <div>
          <h2 className="h3 fw-bold text-dark d-flex align-items-center gap-2 mb-1">
            <span className="text-primary fs-4">📄</span> Lecture Notes
          </h2>
          <p className="text-secondary mb-0 small">Download high-yield PDF summaries for your exams.</p>
        </div>

        {/* Dynamic Category Filters */}
        <div className="d-flex gap-2 overflow-auto pb-2" style={{ whiteSpace: 'nowrap' }}>
          {['All', 'Geography', 'Polity', 'Science'].map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)} 
              className={`btn rounded-pill px-4 py-2 fw-medium text-sm ${filter === category ? 'btn-primary shadow-sm' : 'btn-outline-secondary'}`}
              style={{ transition: 'all 0.2s' }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of PDF Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div className="col" key={note.id}>
              
              <div className="card h-100 shadow-sm border-0 bg-white" style={{ transition: 'transform 0.2s', border: '1px solid rgba(0,0,0,0.05)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body d-flex align-items-center p-3 p-md-4">
                  
                  {/* Red PDF Icon Block */}
                  <div className="bg-danger bg-opacity-10 rounded p-3 me-3 text-danger d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '55px', height: '55px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                      <path d="M5.523 12.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.148 21.148 0 0 0 .5-1.05 12.045 12.045 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.881 3.881 0 0 1-.435-.41c.228.005.434.022.568.051.105.022.234.085.274.179.039.094-.022.21-.13.284a1.14 1.14 0 0 1-.277.085zm-1.554-4.57c.071-.05.115-.098.135-.149.016-.041.02-.092.01-.148-.008-.05-.026-.1-.05-.14-.024-.04-.05-.07-.075-.092a.67.67 0 0 0-.15-.125.4.4 0 0 0-.175-.05.25.25 0 0 0-.15.025c-.05.025-.09.055-.12.085-.03.03-.055.06-.075.09a.6.6 0 0 0-.05.115c-.015.045-.025.09-.035.135-.01.045-.015.09-.02.135-.005.045-.01.09-.01.13a1.5 1.5 0 0 0 .01.125c.01.04.02.08.03.115.01.035.025.07.04.1.015.03.035.06.055.085.02.025.04.05.06.07.025.02.05.04.075.06.03.02.06.035.09.05.035.015.07.025.105.035.04.01.08.015.12.02.04.005.08.005.12.005a1.2 1.2 0 0 0 .12-.005c.04-.005.08-.01.12-.02.04-.01.07-.025.105-.035.03-.015.06-.03.09-.05a.5.5 0 0 0 .075-.06.3.3 0 0 0 .06-.07.4.4 0 0 0 .055-.085.6.6 0 0 0 .04-.1.7.7 0 0 0 .03-.115c.01-.04.02-.08.03-.125a1.5 1.5 0 0 0 .01-.13c0-.04-.005-.085-.01-.13-.005-.045-.015-.09-.02-.135a.6.6 0 0 0-.035-.135.6.6 0 0 0-.05-.115c-.02-.03-.045-.06-.075-.09a.25.25 0 0 0-.12-.085.4.4 0 0 0-.175-.05.67.67 0 0 0-.15.125c-.025.022-.05.052-.075.092-.024.04-.042.09-.05.14-.01.056-.006.107.01.148.02.051.064.099.135.149z"/>
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 1.5v3a.5.5 0 0 0 .5.5h3l-3.5-3.5zM4 1.5h5v3A1.5 1.5 0 0 0 10.5 6h3v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2.5a1 1 0 0 1 1-1z"/>
                    </svg>
                  </div>

                  {/* Text Information */}
                  <div className="flex-grow-1 overflow-hidden">
                    <h6 className="fw-bold text-dark mb-1 text-truncate" title={note.title}>
                      {note.title}
                    </h6>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className={`badge ${note.subject === 'Polity' ? 'bg-primary' : note.subject === 'Science' ? 'bg-info text-dark' : 'bg-success'} bg-opacity-10 text-dark border`} style={{ fontSize: '0.65rem' }}>
                        {note.subject}
                      </span>
                      <small className="text-muted" style={{ fontSize: '0.75rem' }}>• {note.fileSize}</small>
                    </div>
                  </div>

                  {/* Circular Download Button */}
                  <div className="ms-2 flex-shrink-0">
                    <a 
                      href={note.filePath} 
                      download 
                      className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: '40px', height: '40px', transition: 'background-color 0.2s' }}
                      title={`Download ${note.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
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