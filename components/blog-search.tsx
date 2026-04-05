"use client"

import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import type { BlogSearchPost } from "@/lib/blog-data"

interface BlogSearchProps {
  posts: BlogSearchPost[]
}

export function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState("")

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: [
        { name: "title", weight: 0.5 },
        { name: "description", weight: 0.3 },
        { name: "tags", weight: 0.15 },
        { name: "category", weight: 0.05 },
      ],
      threshold: 0.4,
      useExtendedSearch: true,
      ignoreLocation: true,
    })
  }, [posts])

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query.trim()).slice(0, 20)
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

      {query && (
        <div className="absolute top-full z-50 mt-2 w-full bg-background border border-border rounded-md shadow-lg max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map(({ item: post }) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-3 rounded-md hover:bg-muted/50 transition-colors"
                  onClick={() => setQuery("")}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground line-clamp-2">{post.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-1">{post.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              No se encontraron resultados para &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}
