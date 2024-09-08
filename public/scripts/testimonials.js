// Array of testimonials data
const testimonials = [
  {
    quote:
      'Huddle4Tech transformed our IT infrastructure with their innovative solutions. Their team was highly professional and provided top-notch support.',
    name: 'John Doe',
    position: 'CEO of Acme Corp',
    image: '/images/profile1.jpg',
  },
  {
    quote:
      'We saw a significant improvement in our system efficiency after working with Huddle4Tech. Their dedication to solving our challenges was remarkable.',
    name: 'Jane Smith',
    position: 'CTO of Beta Inc',
    image: '/images/profile2.jpg',
  },
  {
    quote:
      'The team at Huddle4Tech delivered beyond our expectations. Their custom software solutions have streamlined our business processes, and their customer service is excellent.',
    name: 'Mark Williams',
    position: 'Project Manager at Gamma Ltd',
    image: '/images/profile1.jpg',
  },
  {
    quote:
      'Working with Huddle4Tech was a game-changer for our business. Their IT consultation and managed services allowed us to focus on our core operations without worrying about technical issues.',
    name: 'Jessica Thompson',
    position: 'Founder of Digital Flow',
    image: '/images/profile2.jpg',
  },
]

let currentTestimonialIndex = 0

// Function to update the testimonial display
function updateTestimonial(index) {
  const testimonial = testimonials[index]
  document.getElementById('testimonial-quote').textContent = testimonial.quote
  document.getElementById('testimonial-name').textContent = testimonial.name
  document.getElementById('testimonial-position').textContent =
    testimonial.position
  document.getElementById('testimonial-image').src = testimonial.image // Update the image
  document.getElementById('testimonial-image').alt =
    testimonial.name + ' picture' // Alt text for the image
}

// Function to go to the next testimonial
function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length
  updateTestimonial(currentTestimonialIndex)
}

// Function to go to the previous testimonial
function prevTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
  updateTestimonial(currentTestimonialIndex)
}

// Function to automatically rotate testimonials every 5 seconds
function autoRotateTestimonials() {
  setInterval(() => {
    nextTestimonial()
  }, 5000) // Change 5000 to any duration you prefer in milliseconds
}

// Initial call to display the first testimonial
updateTestimonial(currentTestimonialIndex)

// Start the auto-rotation
autoRotateTestimonials()

// Script for IMages change in the testimonials section
// Array of image paths
const images = [
  'images/testimonial1.jpg',
  'images/testimonial2.jpg',
  'images/testimonial3.jpg',
  'images/testimonial4.jpg',
  'images/testimonial5.jpg',
  // Add more images as needed
]

let currentImageIndex = 0

// Function to update the displayed image
function updateImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length
  document.getElementById('rotating-image').src = images[currentImageIndex]
}

// Function to start the image rotation
function startImageRotation() {
  setInterval(updateImage, 3000) // Change every 3 seconds, adjust time as needed
}

// Start rotating images when the page loads
window.onload = startImageRotation
