import { useQuery } from '@tanstack/react-query'
import { gymService } from '@services/gymService'

export const useTrainers = () => {
  return useQuery({
    queryKey: ['trainers'],
    queryFn: () => gymService.getTrainers(),
    staleTime: 5 * 60 * 1000,
  })
}

export const useTrainerById = (id: string) => {
  return useQuery({
    queryKey: ['trainer', id],
    queryFn: () => gymService.getTrainerById(id),
    enabled: !!id,
  })
}
