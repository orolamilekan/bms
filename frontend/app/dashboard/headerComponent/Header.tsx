'use client'

import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";


export default function headerComponent() {
    const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) return

    console.log('Searching for:', query)
    // TODO: connect to BMS search logic or API
  }

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-3">
      <h1 className="text-lg font-semibold text-gray-800">
        Building Management System
      </h1>

      <form
      onSubmit={handleSearch}
      className="relative w-full max-w-md"
    >
      {/* <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      /> */}

        <IoIosSearch size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>

      <input
        type="text"
        placeholder="Search devices, rooms, alarms..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full rounded-lg border border-gray-300
          bg-white py-2 pl-10 pr-4
          text-sm text-gray-900
          placeholder-gray-400
          focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200
        "
      />
    </form>
    </header>
  )
}
