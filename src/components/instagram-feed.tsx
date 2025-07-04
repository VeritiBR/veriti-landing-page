"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Heart, MessageCircle, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  like_count?: number
  comments_count?: number
}

interface InstagramFeedProps {
  accessToken?: string
  fallbackPosts?: InstagramPost[]
}

// Posts de fallback caso a API não esteja disponível
const fallbackPosts: InstagramPost[] = [
  {
    id: "1",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption:
      "🎯 Planejamento tributário estratégico para sua empresa crescer com segurança! #contabilidade #tributario",
    timestamp: "2024-01-15T10:00:00Z",
    like_count: 45,
    comments_count: 8,
  },
  {
    id: "2",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption: "💼 Nossa equipe especializada está sempre pronta para atender sua empresa! #equipe #atendimento",
    timestamp: "2024-01-14T15:30:00Z",
    like_count: 62,
    comments_count: 12,
  },
  {
    id: "3",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption: "📊 Relatórios gerenciais que fazem a diferença na tomada de decisão! #gestao #relatorios",
    timestamp: "2024-01-13T09:15:00Z",
    like_count: 38,
    comments_count: 5,
  },
  {
    id: "4",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption:
      "🚀 Transformando a gestão financeira das empresas com tecnologia e expertise! #inovacao #gestaofinanceira",
    timestamp: "2024-01-12T14:20:00Z",
    like_count: 71,
    comments_count: 15,
  },
  {
    id: "5",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption: "✅ Compliance fiscal em dia = tranquilidade para focar no crescimento! #compliance #fiscal",
    timestamp: "2024-01-11T11:45:00Z",
    like_count: 29,
    comments_count: 3,
  },
  {
    id: "6",
    media_type: "IMAGE",
    media_url: "/placeholder.svg?height=400&width=400",
    permalink: "https://instagram.com/veriti",
    caption: "🎉 Mais um cliente satisfeito com nossos serviços de consultoria! #cliente #satisfacao",
    timestamp: "2024-01-10T16:00:00Z",
    like_count: 54,
    comments_count: 9,
  },
]

function InstagramPostCard({ post, index, isVisible }: { post: InstagramPost; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
    })
  }

  const truncateCaption = (caption: string, maxLength = 100) => {
    if (caption.length <= maxLength) return caption
    return caption.substring(0, maxLength) + "..."
  }

  return (
    <div
      className={`group relative transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageError ? "/placeholder.svg?height=400&width=400" : post.media_url}
            alt="Instagram post"
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center space-x-6 text-white">
                {post.like_count && (
                  <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6 fill-current" />
                    <span className="font-semibold">{post.like_count}</span>
                  </div>
                )}
                {post.comments_count && (
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6" />
                    <span className="font-semibold">{post.comments_count}</span>
                  </div>
                )}
              </div>
            </div>

            {/* View on Instagram button */}
            <div className="absolute bottom-4 right-4">
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Media type indicator */}
          {post.media_type === "VIDEO" && (
            <div className="absolute top-3 right-3 bg-black/70 rounded-full p-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          )}
          {post.media_type === "CAROUSEL_ALBUM" && (
            <div className="absolute top-3 right-3 bg-black/70 rounded-lg px-2 py-1">
              <span className="text-white text-xs font-medium">📷+</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              <span className="text-sm font-medium text-gray-600">@veriti</span>
            </div>
            <span className="text-xs text-gray-500">{formatDate(post.timestamp)}</span>
          </div>

          {post.caption && <p className="text-gray-700 text-sm leading-relaxed">{truncateCaption(post.caption)}</p>}

          {/* Engagement stats */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              {post.like_count && (
                <span className="flex items-center space-x-1">
                  <Heart className="h-3 w-3" />
                  <span>{post.like_count}</span>
                </span>
              )}
              {post.comments_count && (
                <span className="flex items-center space-x-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{post.comments_count}</span>
                </span>
              )}
            </div>
            <Link
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal-600 hover:text-teal-700 font-medium"
            >
              Ver post
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InstagramFeed({ accessToken, fallbackPosts: customFallbackPosts }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      if (!accessToken) {
        // Use fallback posts if no access token
        setPosts(customFallbackPosts || fallbackPosts)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        // Instagram Basic Display API endpoint
        const response = await fetch(
          `/api/instagram?access_token=${accessToken}&fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=6`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts")
        }

        const data = await response.json()
        setPosts(data.data || [])
      } catch (err) {
        console.error("Error fetching Instagram posts:", err)
        setError("Não foi possível carregar os posts do Instagram")
        // Use fallback posts on error
        setPosts(customFallbackPosts || fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [accessToken, customFallbackPosts])

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-pink-500 mx-auto mb-4" />
            <p className="text-gray-600">Carregando posts do Instagram...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <div className="flex items-center justify-center mb-6">
              <Instagram className="h-12 w-12 text-pink-500 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Siga nosso{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  Instagram
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acompanhe nosso dia a dia, dicas exclusivas e novidades do mundo contábil. Conteúdo que agrega valor ao
              seu negócio!
            </p>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-yellow-800 text-center">{error}</p>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.slice(0, 6).map((post, index) => (
            <InstagramPostCard key={post.id} post={post} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Não perca nenhuma novidade!</h3>
            <p className="text-pink-100 mb-6 text-lg">
              Siga @veriti no Instagram e receba dicas valiosas sobre gestão financeira e tributária.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="https://instagram.com/veriti" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Seguir no Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
