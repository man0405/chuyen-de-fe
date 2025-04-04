'use client'

import { useState, useEffect, Suspense } from 'react'
import { PropertyFilters } from '../../components/property/property-filter'
import { PropertyListingHeader } from '../../components/property/property-listing-header'
import { PropertyGrid } from '../../components/property/property-grid'
import { Skeleton } from '@/components/ui/skeleton'
import { Building, MapPin, Search } from 'lucide-react'
import { House, HouseAndUserPhone } from '@/types/HouseType'
import { HouseService } from '@/utils/services/HouseService'
import PaginationComponent from '@/components/pagination/pagination'
import { fetchPresignedUrl } from '@/utils/helper'

// View options enum
export type ViewType = 'grid' | 'list' | 'map'

export default function PropertyListing() {
  const [view, setView] = useState<ViewType>('grid')
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [data, setData] = useState<HouseAndUserPhone[]>([])
  const [filteredData, setFilteredData] = useState<any>()
  const [sortBy, setSortBy] = useState('price') // support [price,star]
  const [sortOrder, setSortOrder] = useState('asc') // support [asc,desc]
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(12)
  const [totalRecords, setTotalRecords] = useState<number>(0)
  useEffect(() => {
    filterData(
      searchTerm,
      selectedCategory,
      location,
      sortBy,
      sortOrder,
      currentPage
    )
  }, [
    searchTerm,
    location,
    selectedCategory,
    sortBy,
    sortOrder,
    pageSize,
    currentPage,
  ])

  // Handle search and filtering
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterData(term, selectedCategory, location, sortBy, sortOrder, currentPage)
  }

  const handleLocation = (loc: string) => {
    setLocation(loc)
    filterData(
      searchTerm,
      selectedCategory,
      loc,
      sortBy,
      sortOrder,
      currentPage
    )
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterData(searchTerm, category, location, sortBy, sortOrder, currentPage)
  }

  const handleSortBy = (sortBy: string) => {
    setSortBy(sortBy)
    filterData(
      searchTerm,
      selectedCategory,
      location,
      sortBy,
      sortOrder,
      currentPage
    )
  }
  const handleSortOrder = (sortOrder: string) => {
    setSortOrder(sortOrder)
    filterData(
      searchTerm,
      selectedCategory,
      location,
      sortBy,
      sortOrder,
      currentPage
    )
  }

  const filterData = async (
    term: string,
    category: string,
    loc: string,
    sortBy: string,
    sortOrder: string,
    currentPage: number
  ) => {
    setLoading(true)
    let filtered = filteredData || {
      name: '',
      location: '',
    }

    filtered.name = term.toLowerCase()
    filtered.location = loc.toLowerCase()

    if (category && category !== 'all') {
      filtered.status = category.toLowerCase()
    } else {
      filtered.status = ''
    }

    const { data, totalRecords } = await HouseService.findPageCustomize({
      limit: pageSize,
      offset: (currentPage - 1) * pageSize,
      filter: {
        name: filtered.name,
        location: filtered.location,
        status: filtered.status,
      },
      sort: [
        {
          column: sortBy,
          ascending: sortOrder === 'asc',
        },
      ],
      relationships: [
        {
          table: 'user',
          join_column: 'user_id',
          select: ['name', 'email', 'phone'],
        },
      ],
    })
    const imagePresignedUrls = await Promise.all(
      data.map(async (item) => {
        let imageUrl = item.default_image
        if (imageUrl) {
          const presignedUrl = await fetchPresignedUrl(imageUrl)
          return {
            ...item,
            default_image: presignedUrl,
          }
        } else {
          // Return item with default image
          return {
            ...item,
            image: '/assets/images/galary/galary-1.avif', // Default image
          }
        }
      })
    )
    setData(imagePresignedUrls)
    setTotalRecords(totalRecords)

    setFilteredData(filtered)
    setLoading(false)
  }
  const handlePageChange = (pageNum: number) => {
    filterData(
      searchTerm,
      selectedCategory,
      location,
      sortBy,
      sortOrder,
      pageNum
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find Your Perfect Place
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Discover the best locations, restaurants, hotels, and more in your
              area
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Over 1,000+ locations available</span>
              <span className="mx-2">•</span>
              <Building className="h-4 w-4" />
              <span>Trusted by 10,000+ customers</span>
              <span className="mx-2">•</span>
              <Search className="h-4 w-4" />
              <span>Easy search & filter</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-xl">
          <Suspense fallback={<div className="p-4">Loading filters...</div>}>
            <PropertyFilters
              onSearch={handleSearch}
              onCategoryChange={handleCategoryChange}
              onLocation={handleLocation}
            />
          </Suspense>
          <PropertyListingHeader
            count={data.length}
            view={view}
            onViewChange={setView}
            onSetSortBy={handleSortBy}
            onSetSortOrder={handleSortOrder}
          />

          <div className="px-6 pb-6">
            {loading ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-32" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-10 w-40" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="rounded-lg overflow-hidden border">
                      <Skeleton className="h-48 w-full" />
                      <div className="p-4 space-y-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                        <div className="flex justify-between pt-2">
                          <Skeleton className="h-6 w-20" />
                          <Skeleton className="h-10 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {data.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Search className="h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      No results found
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      We couldn't find any listings matching your search
                      criteria. Try adjusting your filters or search term.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className={view === 'grid' ? 'block' : 'hidden'}>
                      <PropertyGrid listings={data} />
                    </div>

                    <PaginationComponent
                      totalRecords={totalRecords}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      onPageChange={handlePageChange}
                    ></PaginationComponent>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
