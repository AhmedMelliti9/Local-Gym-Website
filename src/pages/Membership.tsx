import { useMemberships } from '@hooks/useMemberships'
import PricingCard from '@components/PricingCard/PricingCard'

const Membership = () => {
  const { data: plans, isLoading, error } = useMemberships()

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <h1 className="text-5xl font-bold text-white mb-4">Membership Plans</h1>
          <p className="text-xl text-gray-300">Choose the plan that fits your lifestyle</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading plans...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400">Failed to load membership plans. Please try again.</p>
            </div>
          ) : plans && plans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No plans found</p>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Can I switch plans anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
                },
                {
                  q: 'Is there a cancellation fee?',
                  a: 'No, there are no cancellation fees. You can cancel anytime without penalties.',
                },
                {
                  q: 'Do you offer group discounts?',
                  a: 'Yes! Contact our team for group membership discounts for 5 or more members.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="font-bold text-white mb-3 text-lg">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Membership
