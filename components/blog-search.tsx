"use client"

import { useState, useMemo } from "react"
import Fuse from "fuse.js"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { getBlogPosts } from "@/lib/blog-data"
import type { BlogPost } from "@/lib/blog-data"
import { Calendar, Clock } from "lucide-react"

export function BlogSearch() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const posts = getBlogPosts()

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: [
        { name: "title", weight: 0.5 },
        { name: "description", weight: 0.3 },
        { name: "tags", weight: 0.15 },
        { name: "category", weight: 0.05 },
        {
          name: "content",
          weight: 0.2,
          getFn: (post) => {
            // Strip HTML tags and normalize content for better search
            return post.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
          }
        },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      useExtendedSearch: true,
      ignoreLocation: true,
    })
  }, [posts])

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    setIsSearching(true)
    const results = fuse.search(query.trim())
    setIsSearching(false)
    return results.slice(0, 20) // Limit to 20 results
  }, [query, fuse])

  const clearSearch = () => {
    setQuery("")
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar artículos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Limpiar búsqueda</span>
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {query && (
        <div className="absolute top-full z-50 mt-2 w-full bg-background border border-border rounded-md shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mx-auto mb-2"></div>
              Buscando...
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map(({ item: post, score }) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-3 rounded-md hover:bg-muted/50 transition-colors"
                  onClick={() => setQuery("")}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  )
}