import React from 'react';
import Navbar from '../components/Navbar';
import UserMatchCard from '../components/UserMatchCard';

const LandingPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      <div className="px-[5%]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto py-12 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="pl-[5%]">
            <div className="inline-flex items-center gap-2 bg-skill-green/10 text-skill-green px-4 py-1.5 rounded-full text-sm font-bold mb-8">
              <div className="w-2 h-2 rounded-full bg-skill-green animate-pulse"></div>
              No money. Just skills.
            </div>
            <h1 className="text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tighter">
              Trade your <br />
              <span className="text-primary italic">skill.</span> <br />
              Learn a new <br />
              <span className="text-skill-green italic">one.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              1 hour of teaching earns you 1 credit. 1 credit unlocks 1 hour of learning. Connect with people in your city and exchange what you know.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                Start Trading Skills
              </button>
              <button className="bg-white border-2 border-gray-100 hover:border-primary/20 text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all">
                See how it works
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 rounded-full blur-3xl -z-10"></div>
            <div className="space-y-6 flex flex-col items-center md:items-end">
              <div className="w-full max-w-md">
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
              </div>
              
              <div className="w-full max-w-md">
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
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto py-10 border-t border-gray-100">
          <div className="flex flex-wrap justify-center gap-16 text-center">
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
        <section className="py-24 bg-white/50 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">The Process</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">How SkillBarter works</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Four simple steps from signing up to your first skill exchange — all in your local area.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Join the Community', desc: 'Create your profile and list skills you have and skills you want to learn.' },
                { step: '02', title: 'Find a Match', desc: 'Our algorithm connects you with local people whose needs match your expertise.' },
                { step: '03', title: 'Exchange Time', desc: 'Meet in person or online. 1 hour of teaching earns you 1 credit.' },
                { step: '04', title: 'Keep Learning', desc: 'Use your earned credits to learn any skill from anyone in the community.' },
              ].map((item) => (
                <div key={item.step} className="group cursor-default">
                  <div className="text-6xl font-bold text-gray-100 mb-4 group-hover:text-footer-from transition-colors">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Showcase */}
        <section className="max-w-7xl mx-auto py-24 text-center">
          <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">Skills in your city</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">180+ skills being traded right now</h2>
          <p className="text-xl text-gray-600 mb-16 mx-auto max-w-2xl leading-relaxed">
            From languages and tech to cooking and music — real people near you, ready to exchange.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Web Design', count: 48, color: 'bg-green-500', desc: 'Design stunning websites and landing pages.' },
              { name: 'English Speaking', count: 91, color: 'bg-blue-500', desc: 'Improve your fluency and speaking confidence.' },
              { name: 'Python / Coding', count: 37, color: 'bg-orange-500', desc: 'Learn programming and software development.' },
              { name: 'Graphic Design', count: 55, color: 'bg-pink-500', desc: 'Create logos, posters, and visual brandings.' },
              { name: 'Urdu to English', count: 29, color: 'bg-indigo-500', desc: 'Translate and master bilingual communication.' },
              { name: 'Digital Marketing', count: 44, color: 'bg-red-500', desc: 'Master SEO, Ads, and social media growth.' },
              { name: 'Photography', count: 22, color: 'bg-green-700', desc: 'Capture professional shots and edit photos.' },
              { name: 'Video Editing', count: 31, color: 'bg-teal-500', desc: 'Edit cinematic videos and YouTube content.' },
            ].map(skill => (
              <div key={skill.name} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                  <span className="text-xs font-bold text-skill-green bg-skill-green/10 px-2 py-1 rounded-md">{skill.count} active</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{skill.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{skill.desc}</p>
                <button className="text-xs font-bold text-primary hover:underline">Browse experts →</button>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="max-w-7xl mx-auto py-24 border-t border-gray-100 text-center">
          <p className="text-skill-green font-bold text-sm tracking-widest uppercase mb-4">Trust & Safety</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Built on accountability</h2>
          <p className="text-xl text-gray-600 mb-16 mx-auto max-w-2xl leading-relaxed">
            A transparent reputation system keeps the community honest and fair.
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { 
                icon: '⭐', 
                title: 'Trust Score', 
                desc: 'Every member has a rating based on their reliability and skill expertise.' 
              },
              { 
                icon: '🛡️', 
                title: 'Dispute Resolution', 
                desc: 'Our support team helps resolve any issues with fairness and transparency.' 
              },
              { 
                icon: '✅', 
                title: 'Verified Profiles', 
                desc: 'We verify phone numbers and identities to build a safer local network.' 
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
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
      </div>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-footer-from to-footer-to py-16 mt-24">
        <div className="max-w-7xl mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-skill-green"></div>
              <span className="text-2xl font-bold text-gray-900 tracking-tighter">SkillBarter</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-700">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">How it works</a>
              <a href="#" className="hover:text-primary transition-colors">Safety</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="text-sm font-bold text-gray-500">
              Local community · No money · Just skills
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-bold">
            <p>© 2026 SkillBarter. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
