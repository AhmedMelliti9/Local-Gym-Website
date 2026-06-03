import { useQuery } from '@tanstack/react-query'
import { gymService } from '@services/gymService'

export const useClasses = () => {
  return useQuery({
    queryKey: ['classes'],
    queryFn: () => gymService.getClasses(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useClassById = (id: string) => {
  return useQuery({
    queryKey: ['class', id],
    queryFn: () => gymService.getClassById(id),
    enabled: !!id,
  })
}
