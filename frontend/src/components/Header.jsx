import React, { useEffect, useRef, useState } from "react";

const API = import.meta.env.VITE_API || "http://localhost:5000";

export default function Header() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState(""); 
  const [price, setPrice] = useState("");      
  const [suggest, setSuggest] = useState([]);
  const [show, setShow] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    if (!q.trim()) {
      setSuggest([]);
      return;
    }

    const t = setTimeout(async () => {
      try {
        const res = await fetch(
          `${API}/search?q=${encodeURIComponent(q)}&category=${category}&price=${price}`
        );
        const data = await res.json();
        setSuggest(data);
      } catch (e) {
        console.error(e);
      }
    }, 200);

    return () => clearTimeout(t);
  }, [q, category, price]);

  function pick(name) {
    setShow(false);
    window.location.href =
      `/products?q=${encodeURIComponent(name)}&category=${category}&price=${price}`;
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href =
      `/products?q=${encodeURIComponent(q)}&category=${category}&price=${price}`;
  }

  return (
    <div className="search-wrapper" ref={wrapper}>
      <form onSubmit={onSubmit} className="search-form">

        <label style={{ color: "black", fontWeight: "bold", fontSize: "22px" }}>
          My Shop
        </label>

        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setShow(true);
          }}
          placeholder="Search products..."
          className="search-input"
        />

        {/* FIXED CATEGORY DROPDOWN */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>          
           <option value="Home Appliances">Home Appliances</option>
        </select>

        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="filter-select"
        >
          <option value="">Any Price</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-5000">₹1000 - ₹5000</option>
        </select>

        <button className="btn big primary" type="submit">
          Search
        </button>
      </form>

      {show && suggest.length > 0 && (
        <ul className="suggestions">
          {suggest.map((s) => (
            <li key={s._id || s.name} onClick={() => pick(s.name)}>
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
