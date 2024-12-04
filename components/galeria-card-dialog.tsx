import type { Foto } from '@/types/type'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

interface GaleriaCardDialogProps {
  foto: Foto
}

export function GaleriaCardDialog({ foto }: GaleriaCardDialogProps) {
  return (
    <DialogContent className="max-w-5xl overflow-hidden border-none bg-primary p-0">
      <div>
        <Image
          src={foto.path}
          width={448}
          height={256}
          alt=""
          className="aspect-video w-full rounded-large object-cover"
        />
      </div>
      <DialogHeader className="flex flex-row justify-between p-4 text-primary-foreground">
        <div>
          <DialogTitle>{foto.titulo}</DialogTitle>
          <DialogDescription className="text-primary-foreground">
            {foto.fonte}
          </DialogDescription>
        </div>
        <Button variant={'ghost'} size={'icon'} aria-label="Favorite Image">
          <HeartIcon aria-hidden="true" />
        </Button>
      </DialogHeader>
    </DialogContent>
  )
}
