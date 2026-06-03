import { Link } from 'react-router-dom'
import { useMemberships } from '@hooks/useMemberships'
import PricingCard from '@components/PricingCard/PricingCard'

const Home = () => {
  const { data: memberships, isLoading } = useMemberships()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of members achieving their fitness goals. Expert trainers, diverse classes, and proven results.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn-primary">Start Your Journey</button>
              <Link to="/classes" className="btn-outline">
                Explore Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Expert Trainers',
                description: 'Certified professionals ready to guide your fitness journey',
              },
              {
                icon: '🎯',
                title: 'Diverse Classes',
                description: 'From yoga to HIIT, find classes that match your goals',
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Monitor your achievements and celebrate milestones',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {!isLoading && memberships && (
        <section className="section-padding bg-gray-950">
          <div className="section-container">
            <h2 className="text-4xl font-bold text-center mb-16">Membership Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberships.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community today and start your transformation. First week is free!
          </p>
          <button className="btn-primary bg-dark hover:bg-gray-900">
            Join Now
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
