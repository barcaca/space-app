'use client'

import logoBrand from '@/public/logo.png'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-primary-foreground">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex max-w-52 justify-start">
              <Image
                src={logoBrand}
                alt="Logo"
                className="aspect-auto h-auto w-full object-contain"
              />
            </div>
            <div className="flex space-x-8">
              <Link
                href="#"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:text-blue-200"
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:text-blue-200"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="transform transition-transform hover:scale-110 hover:text-blue-200"
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-between border-blue-500/30 border-t pt-8 md:flex-row">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Space App. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-blue-100 transition-colors hover:text-white"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-blue-100 transition-colors hover:text-white"
              >
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
