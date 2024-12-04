import tagsData from '@/data/tags.json'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
export function Tags({ tag }: { tag: string }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <p className="text-primary-foreground">Busque por tags:</p>
      <div className="flex flex-wrap gap-2">
        {tagsData.map(item => {
          const isSelected = item.titulo.toLowerCase() === tag
          return (
            <Link
              href={{
                query: {
                  tag: `${item.titulo.toLowerCase()}`,
                },
              }}
              className={cn(
                buttonVariants({ variant: isSelected ? 'gradient' : 'outline' })
              )}
              key={item.id}
            >
              {item.titulo}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
