import { Board } from '@/components/board/Board'
import { FilterClan } from '@/components/filterClan/FilterClan'

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="mb-6">Hello, Teon Page!</h1>
      <Board />
      <FilterClan />
    </main>
  )
}

export default Page
