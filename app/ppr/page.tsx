import { CMCGrid } from '@/app/ppr/CMCGrid'
import { StaticSearchFallback } from '@/app/static/StaticSearchFallback'
import { Search } from '@/components/Search'
import { VirtualGridFallback } from '@/components/VirtualGridFallback'
import { Suspense } from 'react'

export default function PPR() {
  return (
    <div>
      <div className='fixed z-50 h-16 w-full bg-transparent backdrop-blur-lg'>
        <Suspense fallback={<StaticSearchFallback className={'fixed top-4'} />}>
          <Search className={'fixed top-4 pb-0'} />
        </Suspense>
      </div>
      <Suspense fallback={<VirtualGridFallback />}>
        <CMCGrid />
      </Suspense>
    </div>
  )
}
