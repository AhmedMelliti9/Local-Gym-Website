import type { Trainer } from '@types/index'
import { generateStars } from '@utils/helpers'

interface TrainerCardProps {
  trainer: Trainer
  onBook?: (trainerId: string) => void
}

const TrainerCard = ({ trainer, onBook }: TrainerCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      {trainer.image && (
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-400 text-lg">{generateStars(trainer.rating)}</span>
          <span className="text-gray-400 text-sm">({trainer.reviews} reviews)</span>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>

        {/* Specializations */}
        <div className="mb-4">
          <p className="text-sm text-gray-300 font-semibold mb-2">Specializations:</p>
          <div className="flex flex-wrap gap-2">
            {trainer.specializations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400 mb-4 space-y-1">
          <p>📧 {trainer.email}</p>
          <p>📱 {trainer.phone}</p>
        </div>

        <button
          onClick={() => onBook?.(trainer.id)}
          className="w-full btn-primary"
        >
          Book Session
        </button>
      </div>
    </div>
  )
}

export default TrainerCard
