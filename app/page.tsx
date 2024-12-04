import { Galeria } from '@/components/galeria'
import { NavItems } from '@/components/nav-items'
import { Tags } from '@/components/tags'
import { Button } from '@/components/ui/button'
import fotosData from '@/data/fotos.json'
import tagsData from '@/data/tags.json'
import bannerImg from '@/public/banner.png'
import Image from 'next/image'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home({
  searchParams,
}: { searchParams: SearchParams }) {
  const { tag: tagFilterString = 'todas', search: searchQuery } =
    await searchParams
  const tagFilter = tagsData.find(
    ({ titulo }) =>
      titulo.toLowerCase() === (tagFilterString as string).toLowerCase()
  )
  const filteredPhotos =
    tagFilter?.id === 0
      ? fotosData
      : fotosData.filter(({ tagId }) => tagId === tagFilter?.id)

  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-5">
      <div className="col-span-5 flex grid-cols-5 gap-6 md:grid">
        <aside className="hidden sm:block">
          <ul className="flex flex-col gap-2">
            <NavItems />
          </ul>
        </aside>
        <Banner />
      </div>
      <main className="col-span-5 w-full space-y-6 lg:col-span-4 lg:col-start-2">
        <Tags tag={tagFilterString as string} />
        <div className="grid gap-6 sm:grid-cols-5">
          <Galeria fotos={filteredPhotos} />
          <Populares />
        </div>
      </main>
    </div>
  )
}

const Banner = () => {
  return (
    <section className="relative isolate col-span-5 w-full overflow-hidden rounded-3xl py-24 shadow-md sm:col-span-4 sm:py-32">
      <figure className="-z-10 absolute inset-0 h-full w-full">
        <Image src={bannerImg} alt="" className="h-full w-full object-cover" />
      </figure>
      <div
        className="-z-10 absolute inset-0 transform-gpu bg-foreground/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="w-fit max-w-md px-6 lg:px-8">
        <h1 className="font-bold text-2xl text-primary-foreground tracking-tight sm:text-4xl">
          A galeria mais completa de fotos do espaço!
        </h1>
      </div>
    </section>
  )
}

const Populares = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg text-primary-foreground sm:text-2xl">Populares</h2>
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          src={`/populares/foto-${index + 1}.png`}
          alt=""
          className="aspect-video w-full rounded-md object-cover shadow-md md:aspect-square"
          width={256}
          height={256}
        />
      ))}
      <Button className="w-full" variant={'outline'} disabled>
        Ver mais
      </Button>
    </div>
  )
}
