// src/CharacterList.tsx

import { useState, useEffect } from 'react';
import type { CharacterSummary, CharacterDetail } from './types';

export default function CharacterList() {
  const [chars, setChars] = useState<CharacterSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dattebayo-api.onrender.com/characters')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data: any) => {
        console.log('❯ raw data:', data);

        let list: CharacterSummary[] = [];
        if (Array.isArray(data)) {
          list = data;
        } else if (Array.isArray(data.characters)) {
          list = data.characters;
        } else if (Array.isArray(data.data)) {
          list = data.data;
        } else {
          console.warn('Unknown response format, falling back to empty list');
        }
        setChars(list);
      })
      .catch(err => {
        console.error('Fetch failed:', err);
        setChars([]);        // ensure it's always an array
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (!chars.length) return <p>No characters found.</p>;

  return (
    <ul>
      {chars.map(c => {
        // pick whichever ID you have
        const identifier = (c._id as any) ?? c.id!;
        return (
          <li key={identifier} style={{ marginBottom: 20 }}>
            <h2>{c.name}</h2>
            {/* <CharacterClan id={identifier} /> */}
          </li>
        );
      })}
    </ul>
  );
}

// Sub‐component that fetches and displays the clan
function CharacterClan({ id }: { id: string | number }) {
  const [clan, setClan] = useState<string | null>(null);

  useEffect(() => {
    // async helper to do the 2‑step fetch
    async function loadClan() {
      try {
        // 1) fetch character detail
        const detailRes = await fetch(
          `https://dattebayo-api.onrender.com/characters/${id}`
        );
        const detail = await detailRes.json() as any;
        console.log('Character detail:', detail);

        // 2) either take detail.clan directly (if present)
        if (typeof detail.clan === 'string') {
          setClan(detail.clan);
        }
        // or, if there's a clan_id, fetch the clan endpoint
        else if (typeof detail.clan_id === 'number') {
          const clanRes = await fetch(
            `https://dattebayo-api.onrender.com/clans/${detail.clan_id}`
          );
          const clanObj = await clanRes.json() as any;
          setClan(clanObj.name);
        }
        else {
          setClan('Unknown');
        }
      } catch (e) {
        console.error('Loading clan failed:', e);
        setClan('Unknown');
      }
    }

    loadClan();
  }, [id]);

  if (clan === null) return <p>Loading clan…</p>;
  return <p><strong>Clan:</strong> {clan}</p>;
}