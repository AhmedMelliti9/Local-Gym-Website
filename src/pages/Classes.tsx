import { useState } from 'react'
import { useClasses } from '@hooks/useClasses'
import ClassCard from '@components/ClassCard/ClassCard'
import { DIFFICULTY_LEVELS } from '@utils/constants'

const Classes = () => {
  const { data: classes, isLoading, error } = useClasses()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const filteredClasses = selectedDifficulty
    ? classes?.filter((c) => c.difficulty === selectedDifficulty)
    : classes

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <h1 className="text-5xl font-bold text-white mb-4">Our Classes</h1>
          <p className="text-xl text-gray-300">Find the perfect class for your fitness level</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedDifficulty === null ? 'btn-primary' : 'btn-outline'
              }`}
            >
              All Classes
            </button>
            {DIFFICULTY_LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all capitalize ${
                  selectedDifficulty === level ? 'btn-primary' : 'btn-outline'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading classes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400">Failed to load classes. Please try again.</p>
            </div>
          ) : filteredClasses && filteredClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((gymClass) => (
                <ClassCard key={gymClass.id} classData={gymClass} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">No classes found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Classes
