'use client'
import type { Foto } from '@/types/type'
import { useEffect, useMemo, useState } from 'react'
import { GaleriaCard } from './galeria-card'
import { Button } from './ui/button'

interface GaleriaProps {
  fotos: Foto[]
}

export function Galeria({ fotos }: GaleriaProps) {
  const [visibleItems, setVisibleItems] = useState(3)

  const showMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 3, fotos.length))
  }

  const hasMoreItems = useMemo(
    () => visibleItems < fotos.length,
    [visibleItems, fotos.length]
  )

  const itemsToShow = useMemo(() => {
    return fotos.slice(0, visibleItems)
  }, [fotos, visibleItems])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setVisibleItems(3)
  }, [fotos])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setVisibleItems(fotos.length)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [fotos.length])

  return (
    <div className="space-y-6 sm:col-span-4">
      <h2 className="text-lg text-primary-foreground sm:text-2xl">
        Navegue pela galeria
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 md:gap-6">
        {itemsToShow.map(foto => (
          <GaleriaCard key={foto.id} foto={foto} expanded />
        ))}
      </div>
      {hasMoreItems && (
        <Button
          className="w-full sm:hidden"
          variant="outline"
          onClick={showMoreItems}
        >
          Ver mais
        </Button>
      )}
    </div>
  )
}
