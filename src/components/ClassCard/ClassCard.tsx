import type { GymClass } from '@types/index'

interface ClassCardProps {
  classData: GymClass
  onEnroll?: (classId: string) => void
}

const ClassCard = ({ classData, onEnroll }: ClassCardProps) => {
  const capacityPercentage = (classData.currentEnrollment / classData.maxCapacity) * 100

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
      {classData.image && (
        <img
          src={classData.image}
          alt={classData.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{classData.name}</h3>
          <span className="px-3 py-1 bg-primary text-dark text-sm font-semibold rounded-full">
            {classData.difficulty}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4">{classData.description}</p>

        <div className="space-y-2 mb-4 text-sm text-gray-300">
          <p>👨‍🏫 Instructor: {classData.instructor}</p>
          <p>⏱️ Duration: {classData.duration} minutes</p>
          <p>📅 {classData.schedule}</p>
        </div>

        {/* Capacity Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Capacity</span>
            <span>{classData.currentEnrollment}/{classData.maxCapacity}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(capacityPercentage, 100)}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => onEnroll?.(classData.id)}
          className="w-full btn-primary"
          disabled={classData.currentEnrollment >= classData.maxCapacity}
        >
          {classData.currentEnrollment >= classData.maxCapacity ? 'Class Full' : 'Enroll Now'}
        </button>
      </div>
    </div>
  )
}

export default ClassCard
