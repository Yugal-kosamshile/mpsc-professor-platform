import React, { useState } from "react";
import './Lectures.css'; // Import the CSS file for styling

// ACTUAL YOUTUBE DATA FROM MPSC PROFESSOR
const youtubeVideos = [
  {
    id: "KFFcdgJaVdM",
    title: "महाराष्ट्राचा भूगोल | महाराष्ट्रातील राष्ट्रीय उद्याने | National Park| MPSCसरळसेवा",
    category: "geography",
    date: "Feb 6, 2026",
    views: "11.2K",
    url: "https://www.youtube.com/watch?v=KFFcdgJaVdM"
  },
  {
    id: "IsB_KLgqjvE",
    title: "राष्ट्रपती | President of India | Polity One Shot | MPSC UPSC SSC सरळसेवा",
    category: "polity",
    date: "Jan 1, 2026",
    views: "12.8K",
    url: "https://www.youtube.com/watch?v=IsB_KLgqjvE"
  },
  {
    id: "OIVhuiqFB_s",
    title: "महाराष्ट्राचा भूगोल | महाराष्ट्र जिल्हे पुनर्रचना | MPSC UPSC SSC सरळसेवा",
    category: "geography",
    date: "Jan 14, 2026",
    views: "5.2K",
    url: "https://www.youtube.com/watch?v=OIVhuiqFB_s"
  },
  {
    id: "H5HlY4BVjh8",
    title: "घटना निर्मिती - पार्ट 1| Ghatna Nirmiti | Complete Polity | #mpsc",
    category: "polity",
    date: "Jan 17, 2026",
    views: "4.2K",
    url: "https://www.youtube.com/watch?v=H5HlY4BVjh8"
  },
  {
    id: "Rl2hHKzWzbE",
    title: "उपराष्ट्रपती | Vice President of India | Polity One Shot | MPSC UPSC SSC",
    category: "polity",
    date: "Jan 9, 2026",
    views: "3.5K",
    url: "https://www.youtube.com/watch?v=Rl2hHKzWzbE"
  },
  {
    id: "FmIJmEi39aA",
    title: "संवैधानिक संस्था | Constitutional Bodies | Polity Revision | Polity One Shot",
    category: "polity",
    date: "Dec 27, 2025",
    views: "744",
    url: "https://www.youtube.com/watch?v=FmIJmEi39aA"
  }
];

function Lectures() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter the videos array based on the selected category
  const filteredVideos = activeFilter === 'all' 
    ? youtubeVideos 
    : youtubeVideos.filter(item => item.category === activeFilter);

  return (
    <section id="videos" className="scroll-mt-20 container py-5">
      
      {/* Header and Filter Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <span className="text-red-600 text-xl">▶&#xFE0E;</span> Latest Lectures
          </h2>
          <p className="text-slate-500 mt-1">Directly fetched from the MPSCProfessor YouTube Channel.</p>
        </div>
        
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          <button 
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === 'all' ? 'bg-[#1e40af] text-white border-[#1e40af]' : 'text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Videos
          </button>
          <button 
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === 'geography' ? 'bg-[#1e40af] text-white border-[#1e40af]' : 'text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            onClick={() => setActiveFilter('geography')}
          >
            Geography (भूगोल)
          </button>
          <button 
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${activeFilter === 'polity' ? 'bg-[#1e40af] text-white border-[#1e40af]' : 'text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            onClick={() => setActiveFilter('polity')}
          >
            Polity (राज्यव्यवस्था)
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="video-grid">
        {filteredVideos.map((item) => {
          // Determine badge colors based on category
          const badgeColor = item.category === 'polity' 
            ? 'bg-blue-100 text-blue-700' 
            : 'bg-green-100 text-green-700';

          return (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-all group overflow-hidden transform hover:-translate-y-1">
              
              {/* Thumbnail Wrapper (16:9 Aspect Ratio) */}
              <div className="relative w-full pt-[56.25%] bg-slate-100 overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`} 
                  alt={item.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* YouTube Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center opacity-90 group-hover:opacity-100 shadow-lg transform group-hover:scale-110 transition-all">
                    <span className="ml-1 text-xl">▶&#xFE0E;</span>
                  </div>
                </div>
              </div>
              
              {/* Video Meta Data */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide ${badgeColor}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{item.date}</span>
                </div>
                
                <h3 
                  className="font-bold text-slate-800 text-[15px] leading-tight mb-4 transition-colors hover:text-[#1e40af]" 
                  title={item.title}
                  style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {item.title}
                </h3>
                
                <div className="flex items-center text-xs text-slate-500 font-medium pt-3 border-t border-slate-100 justify-between">
                  <span className="flex items-center gap-1">
                    <span className="text-slate-400 text-sm">👁</span> {item.views} views
                  </span>
                  <span className="font-semibold hover:underline" style={{ color: '#1e40af' }}>Watch now</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Lectures;