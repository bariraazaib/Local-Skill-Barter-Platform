import React from 'react';

const UserMatchCard = ({ initials, name, location, offers, wants, match, trust, color }) => (
  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${color}`}>
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
      {trust && (
        <div className="text-right">
          <span className="text-xs font-bold text-skill-green">{trust} trust</span>
        </div>
      )}
    </div>

    <div className="grid grid-cols-2 gap-4 text-xs">
      <div>
        <p className="text-gray-400 mb-2 font-medium">Offers</p>
        <div className="flex flex-wrap gap-1">
          {offers.map(skill => (
            <span key={skill} className="bg-footer-from/30 text-gray-700 px-2 py-1 rounded-md">{skill}</span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-gray-400 mb-2 font-medium">Wants</p>
        <div className="flex flex-wrap gap-1">
          {wants.map(skill => (
            <span key={skill} className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md">{skill}</span>
          ))}
        </div>
      </div>
    </div>

    {match && (
      <div className="mt-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold text-gray-700 tracking-tight">Match</span>
          <span className="text-xs font-bold text-skill-green">{match}%</span>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-skill-green h-full transition-all duration-1000" style={{ width: `${match}%` }}></div>
        </div>
      </div>
    )}
  </div>
);

export default UserMatchCard;
