import Link from "next/link"
import { getAuthorByName } from "@/lib/authors-data"

interface AuthorBoxProps {
  authorName: string
}

export function AuthorBox({ authorName }: AuthorBoxProps) {
  const author = getAuthorByName(authorName)
  if (!author) return null

  return (
    <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Sobre el autor</p>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="text-xl font-bold text-primary">{author.name.charAt(0)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/autores/${author.slug}`}
            className="font-bold text-foreground hover:text-primary transition-colors"
          >
            {author.name}
          </Link>
          <p className="text-sm text-primary font-medium mt-0.5">{author.role}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{author.credentials}</p>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{author.bio}</p>
          <Link
            href={`/autores/${author.slug}`}
            className="text-xs text-primary hover:underline mt-2 inline-block font-medium"
          >
            Ver todos los artículos →
          </Link>
        </div>
      </div>
    </div>
  )
}
