import React from 'react';
import Navbar from '../components/Navbar';
import UserMatchCard from '../components/UserMatchCard';

const LandingPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-skill-green/10 text-skill-green px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <div className="w-2 h-2 rounded-full bg-skill-green animate-pulse"></div>
            No money. Just skills.
          </div>
          <h1 className="text-7xl font-bold leading-[1.1] mb-8 text-gray-900 tracking-tight">
            Trade your <br />
            <span className="text-gray-900">skill.</span> <br />
            Learn a <span className="text-skill-green">new <br />one.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            1 hour of teaching earns you 1 credit. 1 credit unlocks 1 hour of learning. 
            Connect with people in your city and exchange what you know.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Start Trading Skills
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg border border-gray-100 hover:bg-gray-50 transition-all">
              See how it works
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10"></div>
          <div className="space-y-6">
            <UserMatchCard 
              initials="AS"
              name="Ayesha S."
              location="Rawalpindi, I-8"
              offers={['Web Design', 'Figma']}
              wants={['English', 'IELTS']}
              match={92}
              trust="98"
              color="bg-footer-from text-gray-700"
            />
            
            <div className="ml-12">
              <UserMatchCard 
                initials="KM"
                name="Kamran M."
                location="Islamabad, G-10"
                offers={['English', 'Speaking']}
                wants={['Web Design']}
                match={78}
                trust="91"
                color="bg-blue-100 text-blue-600"
              />
            </div>

            <div className="absolute -top-12 -right-4 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <div>
                 <p className="text-xl font-bold text-gray-900 leading-none">12</p>
                 <p className="text-[10px] text-gray-500 font-medium">credits earned</p>
                 <p className="text-[10px] text-skill-green font-bold">98 trust</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-100">
        <div className="flex flex-wrap justify-start gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">2,400+</h2>
            <p className="text-sm text-gray-500 font-medium">Active traders</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">180+</h2>
            <p className="text-sm text-gray-500 font-medium">Skills available</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">8,900</h2>
            <p className="text-sm text-gray-500 font-medium">Hours exchanged</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">The Process</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">How SkillBarter works</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl leading-relaxed">
            Four simple steps from signing up to your first skill exchange — all in your local area.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { id: '01', title: 'Post your skills', desc: 'List what you can teach and what you want to learn. Add your city and area.' },
              { id: '02', title: 'Get matched', desc: 'Our system finds people nearby who have what you need and need what you have.' },
              { id: '03', title: 'Schedule a session', desc: 'Agree on time, format (online/in-person), and session length. 1 hour = 1 credit.' },
              { id: '04', title: 'Rate & build trust', desc: 'Both parties review. Your trust score grows with every successful exchange.' },
            ].map(step => (
              <div key={step.id} className="group">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-skill-green/10 text-skill-green rounded-md text-xs font-bold mb-6 group-hover:bg-skill-green group-hover:text-white transition-all">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">Skills in your city</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">180+ skills being traded right now</h2>
        <p className="text-xl text-gray-600 mb-16 leading-relaxed">
          From languages and tech to cooking and music — real people near you, ready to exchange.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Web Design', count: 48, color: 'bg-green-500' },
            { name: 'English Speaking', count: 91, color: 'bg-blue-500' },
            { name: 'Python / Coding', count: 37, color: 'bg-orange-500' },
            { name: 'Graphic Design', count: 55, color: 'bg-pink-500' },
            { name: 'Urdu to English', count: 29, color: 'bg-indigo-500' },
            { name: 'Digital Marketing', count: 44, color: 'bg-red-500' },
            { name: 'Photography', count: 22, color: 'bg-green-700' },
            { name: 'Video Editing', count: 31, color: 'bg-teal-500' },
            { name: 'IELTS Prep', count: 17, color: 'bg-blue-700' },
            { name: 'Math / Tutoring', count: 26, color: 'bg-orange-700' },
            { name: 'Logo Design', count: 18, color: 'bg-indigo-700' },
            { name: 'Excel & Sheets', count: 33, color: 'bg-emerald-600' },
          ].map(skill => (
            <div key={skill.name} className="flex items-center gap-3 group cursor-pointer">
              <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
              <span className="font-bold text-gray-900 group-hover:text-skill-green transition-colors">{skill.name}</span>
              <span className="text-gray-400 text-xs font-bold">{skill.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-100">
        <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">Trust & Safety</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Built on accountability</h2>
        <p className="text-xl text-gray-600 mb-16 leading-relaxed">
          A transparent reputation system keeps the community honest and fair.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: '⭐', 
              title: 'Trust Score (0–100)', 
              desc: 'Every completed session updates your public score. Rated by peers, transparent to all — higher score = more match opportunities.' 
            },
            { 
              icon: '⚖️', 
              title: 'Dispute resolution', 
              desc: 'Admin-mediated conflict handling with evidence uploads. No-show credits held in escrow. Fair outcomes, every time.' 
            },
            { 
              icon: '🔐', 
              title: 'Verified identity', 
              desc: 'Phone and email verification required. Location-confirmed profiles. Flag & report system for any violations.' 
            },
          ].map(feature => (
            <div key={feature.title} className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100/50 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-skill-green rounded-[2.5rem] p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">Ready to trade your first skill?</h2>
            <p className="text-xl text-white/80 font-medium">
              Join thousands of people in Rawalpindi and Islamabad already exchanging skills — for free.
            </p>
          </div>
          <button className="relative z-10 bg-white text-skill-green px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
            Create your profile <span className="text-2xl">→</span>
          </button>
          
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 bg-gradient-to-br from-footer-from to-footer-to py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight">SkillBarter</span>
            </div>
            
            <div className="flex gap-8 text-sm font-bold text-gray-700">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">How it works</a>
              <a href="#" className="hover:text-primary transition-colors">Safety</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="text-sm font-bold text-gray-500">
              Local community · No money · Just skills
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-black/5 text-center text-xs text-gray-400 font-bold">
            © 2026 SkillBarter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
