import type { Foto } from '@/types/type'
import { Dialog } from '@radix-ui/react-dialog'
import { HeartIcon, Maximize2Icon } from 'lucide-react'
import Image from 'next/image'
import { GaleriaCardDialog } from './galeria-card-dialog'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

interface GaleriaCardProps {
  foto: Foto
  expanded?: boolean
}

export function GaleriaCard({ foto, expanded }: GaleriaCardProps) {
  return (
    <div
      key={foto.id}
      className="relative flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-md"
    >
      <div className="">
        <Image
          src={foto.path}
          width={448}
          height={256}
          alt=""
          className="aspect-video w-full rounded-large object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-3 md:p-4">
        <div className="flex w-fit flex-col gap-2">
          <h3 className="md:text-xl">{foto.titulo}</h3>
          <p className="text-sm md:text-base">{foto.fonte}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={'ghost'} size={'icon'} aria-label="Favorite Image">
            <HeartIcon aria-hidden="true" />
          </Button>
          {expanded && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  aria-label="Expandir Imagem"
                >
                  <Maximize2Icon aria-hidden="true" />
                </Button>
              </DialogTrigger>
              <GaleriaCardDialog foto={foto} />
            </Dialog>
          )}
        </div>
      </div>
    </div>
  )
}
