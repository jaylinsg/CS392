// src/CharacterList.tsx

import { useState, useEffect } from 'react';
import type { CharacterDetail } from './types';

export default function CharacterList() {
  const [chars, setChars] = useState<CharacterDetail[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dattebayo-api.onrender.com/characters')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data: { characters: CharacterDetail[] }) => {
        setChars(data.characters)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading…</p>;

  return (
    <ul>
      {chars.map(char => {
        // Safely pull out the ninjaRank object (or get an empty one)
        const ninjaRank = char.rank?.ninjaRank ?? {}
        // Build a display string like "Part I: Genin, Part II: Jōnin"
        const rankText = Object.entries(ninjaRank).length
          ? Object.entries(ninjaRank)
            .map(([period, title]) => `${period}: ${title}`)
            .join(', ')
          : 'Unknown'

        return (
          <li key={char.id} style={{ marginBottom: 24 }}>
            <h3>{char.name}</h3>

            {char.images?.[0] && (
              <img
                src={char.images[0]}
                alt={char.name}
                style={{ width: 120, height: 'auto', borderRadius: 8 }}
              />
            )}

            <p><strong>Clan:</strong> {char.personal.clan}</p>
            <p>
              <strong>Affiliation:</strong>{' '}
              {char.personal.affiliation.join(', ')}
            </p>
            <p><strong>Rank:</strong> {rankText}</p>
          </li>
        )
      })}
    </ul>
  )
}