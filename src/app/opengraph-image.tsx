import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Christopher Estep — Founder of Turblu'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0c',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderLeft: '6px solid #e10600',
            paddingLeft: 48,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 24,
            }}
          >
            Venice Beach, California
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Christopher Estep
          </div>
          <div
            style={{
              fontSize: 34,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Founder of Turblu · Supply chain leader · Builder of car communities
          </div>
          <div
            style={{
              fontSize: 26,
              color: 'rgba(255,255,255,0.35)',
              marginTop: 48,
            }}
          >
            estepchristopher.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
