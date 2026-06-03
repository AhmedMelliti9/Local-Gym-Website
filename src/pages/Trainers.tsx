import { useTrainers } from '@hooks/useTrainers'
import TrainerCard from '@components/TrainerCard/TrainerCard'

const Trainers = () => {
  const { data: trainers, isLoading, error } = useTrainers()

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <h1 className="text-5xl font-bold text-white mb-4">Our Trainers</h1>
          <p className="text-xl text-gray-300">Meet our certified fitness professionals</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading trainers...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400">Failed to load trainers. Please try again.</p>
            </div>
          ) : trainers && trainers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No trainers found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Trainers
