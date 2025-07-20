// src/CharacterList.tsx

import { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import type { CharacterDetail } from './types'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: #1b1b1b;                   /* deep charcoal behind everything */
    color: #fff;
    font-family: 'Helvetica Neue', Arial, sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Segoe UI', 'Verdana', sans-serif;
    color: #ffa500;                       /* Naruto-orange for headings */
  }

  p {
    margin: 0;
  }
`

const Header = styled.h1`
  text-align: center;
  margin: 24px 0;
  font-size: 2.4rem;
  text-shadow: 0 0 6px rgba(255,165,0,0.7);
`

const Container = styled.div`
  width: 90vw;
  max-width: 1400px;
  margin: auto;
  padding: 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 8px 0;
`

const Card = styled.div`
  background: #262626;                   /* very dark gray card */
  border: 2px solid #ffa500;            /* bright orange border */
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 16px rgba(255,165,0,0.4);
  }

  h3 {
    margin: 12px;
    text-align: center;
    font-size: 1.1rem;
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background: #333;
  }

  .details {
    padding: 12px;
    flex-grow: 1;

    p {
      font-size: 0.85rem;
      line-height: 1.4;
      color: #ddd;
      margin-bottom: 6px;

      strong {
        color: #ffa500;
      }
    }
  }
`

export default function CharacterList() {
  const [chars, setChars] = useState<CharacterDetail[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchAllPages() {
      setLoading(true)
      setError(null)

      try {
        // page 1
        const res1 = await fetch(
          'https://dattebayo-api.onrender.com/characters?page=1'
        )
        if (!res1.ok) throw new Error(`Page 1 failed: ${res1.status}`)
        const json1: {
          characters: CharacterDetail[]
          pageSize: number
          total: number
        } = await res1.json()

        const allChars = [...json1.characters]
        const totalPages = Math.ceil(json1.total / json1.pageSize)
        const pages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2)

        // parallel fetch of remaining pages
        const results = await Promise.all(
          pages.map(page =>
            fetch(
              `https://dattebayo-api.onrender.com/characters?page=${page}`
            ).then(res => {
              if (!res.ok)
                throw new Error(`Page ${page} failed: ${res.status}`)
              return res.json() as Promise<{
                characters: CharacterDetail[]
              }>
            })
          )
        )

        results.forEach(r => allChars.push(...r.characters))
        if (!cancelled) setChars(allChars)
      } catch (e: any) {
        console.error('Error fetching characters:', e)
        if (!cancelled) setError(e.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchAllPages()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) return <p>Loading…</p>
  if (error) return <p style={{ color: '#ff4500', textAlign: 'center' }}>Error: {error}</p>

  return (
    <>
      <GlobalStyle />
      <Header>From Dattebayo API</Header>
      <Container>
        <Grid>
          {chars.map(c => {
            const clan = c.personal?.clan ?? 'Unknown'
            const aff = Array.isArray(c.personal?.affiliation)
              ? c.personal.affiliation.join(', ')
              : String(c.personal?.affiliation ?? 'Unknown')
            const ninjaRank = c.rank?.ninjaRank ?? {}
            const rankText = Object.entries(ninjaRank).length
              ? Object.entries(ninjaRank)
                .map(([p, t]) => `${p}: ${t}`)
                .join(', ')
              : 'Unknown'

            return (
              <Card key={c.id}>
                <h3>{c.name}</h3>
                {c.images?.[0] && <img src={c.images[0]} alt={c.name} />}
                <div className="details">
                  <p><strong>Clan:</strong> {clan}</p>
                  <p><strong>Affiliation:</strong> {aff}</p>
                  <p><strong>Rank:</strong> {rankText}</p>
                  <p>
                    <strong>Debut (Anime):</strong>{' '}
                    {c.debut?.anime ?? 'Unknown'}
                  </p>
                </div>
              </Card>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
