import Image from 'next/image'
import { Camera } from 'lucide-react'

type PhotoSlotProps = {
  /** Set to an image under /public (e.g. "/images/palmetto-rally.jpg") to replace the placeholder */
  src?: string
  alt: string
  /** Hint shown inside the placeholder about what photo belongs here */
  label: string
  /** Short caption rendered under the photo */
  caption?: string
  className?: string
}

export function PhotoSlot({ src, alt, label, caption, className = '' }: PhotoSlotProps) {
  if (src) {
    return (
      <figure>
        <div className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${className}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 660px"
          />
        </div>
        {caption && (
          <figcaption className="mt-3 text-sm text-white/40">{caption}</figcaption>
        )}
      </figure>
    )
  }

  return (
    <div
      className={`photo-slot rounded-2xl flex flex-col items-center justify-center gap-3 text-center p-6 ${className}`}
      role="img"
      aria-label={alt}
    >
      <Camera className="w-6 h-6 text-white/25" aria-hidden="true" />
      <p className="text-sm text-white/30 max-w-[24ch]">{label}</p>
    </div>
  )
}
