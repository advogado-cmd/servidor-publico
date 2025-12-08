"use client"

import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "0SRSj3G3HI0"

  return (
    <section className="py-16 md:py-20 bg-[#d1cece]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0e105a] mb-4">
            Conheça o Dr. Carlos Fernando
          </h2>
          <p className="text-[#1a1a2e] text-lg mb-8">
            Veja como podemos ajudar você a defender seus direitos como servidor público
          </p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-xl overflow-hidden shadow-xl bg-black">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full group cursor-pointer"
                  aria-label="Reproduzir vídeo"
                >
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Thumbnail do vídeo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#c9a962] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-10 h-10 text-[#0e105a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title="Dr. Carlos Fernando - Advogado Servidor Público"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
