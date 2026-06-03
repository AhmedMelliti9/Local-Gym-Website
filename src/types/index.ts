export interface GymClass {
  id: string
  name: string
  description: string
  schedule: string
  duration: number
  maxCapacity: number
  currentEnrollment: number
  instructor: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  image?: string
}

export interface Trainer {
  id: string
  name: string
  email: string
  phone: string
  specializations: string[]
  bio: string
  image?: string
  rating: number
  reviews: number
}

export interface MembershipPlan {
  id: string
  name: string
  price: number
  duration: 'monthly' | 'quarterly' | 'annual'
  features: string[]
  popular?: boolean
}

export interface Testimonial {
  id: string
  memberName: string
  content: string
  rating: number
  image?: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
