import { useQuery } from '@tanstack/react-query'
import { gymService } from '@services/gymService'

export const useMemberships = () => {
  return useQuery({
    queryKey: ['memberships'],
    queryFn: () => gymService.getMembershipPlans(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}
