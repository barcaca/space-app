'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import logoBrand from '@/public/logo.png'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NavItems } from '../nav-items'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const handleMenuOpenChange = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <nav
      className="z-40 flex h-auto w-full items-center justify-center"
      ref={navRef}
    >
      <header className="flex w-full flex-col flex-nowrap items-center justify-between gap-4 sm:flex-row">
        <div className="flex w-full items-center justify-between gap-2">
          <Button
            className="z-40 text-primary-foreground hover:bg-primary sm:hidden"
            variant={'ghost'}
            size={'icon'}
            aria-label="Menu"
            aria-pressed={isMenuOpen}
            data-open={isMenuOpen}
            onClick={handleMenuOpenChange}
          >
            <span className="sr-only">
              {isMenuOpen ? 'Fecha menu' : 'Abri menu'}
            </span>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
          <div className="flex max-w-52 justify-start">
            <Image
              src={logoBrand}
              alt="Logo"
              className="aspect-auto h-auto w-full object-contain"
            />
          </div>
        </div>

        <Label
          htmlFor="search"
          className="relative w-full max-w-lg rounded-md bg-gradient-to-r from-accent to-destructive p-px ring-2 ring-transparent ring-offset-blue-950 transition-all duration-300 has-[:focus-visible]:ring-destructive has-[:focus-visible]:ring-offset-2 "
        >
          <span className="sr-only">Buscar</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-muted-foreground">
            <SearchIcon size={16} strokeWidth={2} aria-hidden="true" />
          </span>
          <Input
            id="search"
            className="peer border-none bg-primary pe-9 text-primary-foreground"
            type="text"
            placeholder="O que deseja encontrar?"
          />
        </Label>
      </header>
      <ul
        className="data-[open=false]:-translate-y-full fixed inset-x-0 top-0 z-30 flex max-w-full flex-col gap-2 overflow-y-auto bg-gradient-to-b from-primary to-secondary px-6 py-24 shadow-md duration-300 ease-in-out"
        data-open={isMenuOpen}
      >
        <NavItems />
      </ul>
    </nav>
  )
}
