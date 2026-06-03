import type { MembershipPlan } from '@types/index'
import { formatPrice } from '@utils/helpers'

interface PricingCardProps {
  plan: MembershipPlan
  onSubscribe?: (planId: string) => void
}

const PricingCard = ({ plan, onSubscribe }: PricingCardProps) => {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        plan.popular
          ? 'ring-2 ring-primary shadow-lg shadow-primary/20 scale-105 bg-gray-800'
          : 'bg-gray-900'
      }`}
    >
      {plan.popular && (
        <div className="bg-primary text-dark text-center py-2 font-bold text-sm">
          MOST POPULAR
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-6">{plan.duration} plan</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-primary">{formatPrice(plan.price)}</span>
          <span className="text-gray-400 text-sm ml-2">/{plan.duration}</span>
        </div>

        <button
          onClick={() => onSubscribe?.(plan.id)}
          className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 ${
            plan.popular
              ? 'btn-primary'
              : 'btn-outline'
          }`}
        >
          Choose Plan
        </button>

        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingCard
