import apiClient from './api'
import type { GymClass, Trainer, MembershipPlan } from '@types/index'

// Gym Classes
export const gymService = {
  getClasses: async (): Promise<GymClass[]> => {
    return apiClient.get('/classes')
  },

  getClassById: async (id: string): Promise<GymClass> => {
    return apiClient.get(`/classes/${id}`)
  },

  enrollClass: async (classId: string, userId: string) => {
    return apiClient.post(`/classes/${classId}/enroll`, { userId })
  },

  // Trainers
  getTrainers: async (): Promise<Trainer[]> => {
    return apiClient.get('/trainers')
  },

  getTrainerById: async (id: string): Promise<Trainer> => {
    return apiClient.get(`/trainers/${id}`)
  },

  bookTrainer: async (trainerId: string, userId: string, sessionDate: string) => {
    return apiClient.post(`/trainers/${trainerId}/book`, { userId, sessionDate })
  },

  // Memberships
  getMembershipPlans: async (): Promise<MembershipPlan[]> => {
    return apiClient.get('/memberships')
  },

  subscribeMembership: async (planId: string, userId: string) => {
    return apiClient.post(`/memberships/${planId}/subscribe`, { userId })
  },

  // Testimonials
  getTestimonials: async () => {
    return apiClient.get('/testimonials')
  },

  // Contact
  submitContactForm: async (data: any) => {
    return apiClient.post('/contact', data)
  },
}
