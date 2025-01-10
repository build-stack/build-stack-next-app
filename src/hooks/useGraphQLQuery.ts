"use client"
import { DocumentNode, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'

/**
 * This hook must be used only within Client Components.
 * For Server Components, use direct Apollo Client queries or native fetch instead.
 */
export function useGraphQLQuery(query: DocumentNode, options = {}) {
    const [isOffline, setIsOffline] = useState(false)

    const { loading, error, data, refetch } = useQuery(query, {
      onError: (error) => {
        if (error.networkError) {
          setIsOffline(true)
        }
      },
      ...options
    })

    // Retry logic when connection is restored
    useEffect(() => {
      const handleOnline = () => {
        setIsOffline(false)
        refetch()
      }

      window.addEventListener('online', handleOnline)
      return () => window.removeEventListener('online', handleOnline)
    }, [refetch])

    return { loading, error, data, isOffline, refetch }
}