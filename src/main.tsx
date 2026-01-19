import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
//React Query + PWA patter
const queryClient = new QueryClient({
  defaultOptions:{
    // TODO: Change stale and cache time in production
    queries:{
      staleTime: 40*(60*1000), // 40 mins
      gcTime:15*(60*1000), // 15 mins cacheTime
      refetchIntervalInBackground:true ,
      refetchOnWindowFocus: true,       // Refetch when user returns
      refetchOnReconnect: true,         // Refetch when online again
      retry: 3,                         // Retry failed requests
      networkMode: 'offlineFirst', 
      
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    
  </StrictMode>,
)
