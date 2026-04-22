import { useState, useEffect } from "react";

export default function FetchPoke() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //const randomId = Math.floor(Math.random() * 1025) + 1; // 1025
    const getData = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setImg(data.sprites.front_default);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-6 text-white rounded-xl">
      {loading && <p className="text-blue-300 animate-pulse">Loading...</p>}
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {img && <p><img className="size-30" src={img} /></p>}
    </div>
  );
}