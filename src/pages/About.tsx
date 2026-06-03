const About = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Your partner in fitness excellence</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Local Gym was founded with a simple mission: to make fitness accessible, affordable, and enjoyable for everyone
            in our community. What started as a small facility with a few dedicated trainers has grown into a thriving
            fitness community with hundreds of satisfied members.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We are committed to empowering individuals to achieve their fitness goals through expert guidance, state-of-the-art
            facilities, and a supportive community that celebrates every victory, big or small.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Local Gym?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Expert Trainers', desc: 'Certified professionals with years of experience' },
              { title: 'Diverse Classes', desc: 'From yoga to CrossFit, something for everyone' },
              { title: 'Modern Facilities', desc: 'Top-of-the-line equipment and clean environment' },
              { title: 'Community Focus', desc: 'Supportive environment that motivates growth' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-primary text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
