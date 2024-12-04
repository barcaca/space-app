'use client'
import { cn } from '@/lib/utils'
import {
  EyeIcon,
  HomeIcon,
  NewspaperIcon,
  PartyPopperIcon,
  ThumbsUpIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/button'

const navItems = [
  {
    label: 'Início',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Mais vistas',
    href: '#',
    icon: EyeIcon,
  },
  {
    label: 'Mais curtidas',
    href: '#',
    icon: ThumbsUpIcon,
  },
  {
    label: 'Novas',
    href: '#',
    icon: NewspaperIcon,
  },
  {
    label: 'Surpreenda-me',
    href: '#',
    icon: PartyPopperIcon,
  },
]

export function NavItems() {
  const pathname = usePathname()
  return navItems.map(item => {
    return (
      <li key={item.label}>
        <Link
          href={item.href}
          className={cn(
            buttonVariants({
              variant: pathname === item.href ? 'gradient' : 'ghost',
            }),
            'text-primary-foreground'
          )}
        >
          <item.icon />
          {item.label}
        </Link>
      </li>
    )
  })
}
