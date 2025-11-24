import React from 'react';

export default function Filters({ categories, value, onChange }){
  return (
    <div className="filters">
      <label>
        Category:
        <select value={value} onChange={e => onChange(e.target.value)}>
          <option value="All">All</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
    </div>
  );
}
