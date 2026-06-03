import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { gymService } from '@services/gymService'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true)
      await gymService.submitContactForm(data)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Failed to submit form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 section-padding">
        <div className="section-container">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">📍 Address</h3>
                  <p className="text-gray-400">123 Fitness Ave, City, State 12345</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">📧 Email</h3>
                  <a href="mailto:info@localgym.com" className="text-gray-400 hover:text-primary transition-colors">
                    info@localgym.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">📱 Phone</h3>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-primary transition-colors">
                    (555) 123-4567
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">🕒 Hours</h3>
                  <p className="text-gray-400">Mon-Fri: 6AM - 10PM</p>
                  <p className="text-gray-400">Sat-Sun: 8AM - 8PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input
                    {...register('name')}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register('email')}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    {...register('phone')}
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <input
                    {...register('subject')}
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
