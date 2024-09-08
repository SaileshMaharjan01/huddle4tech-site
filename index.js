const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { title: 'Huddle4Tech-Homepage' })
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'Huddle4Tech-Aboutpage' })
})
app.get('/services', (req, res) => {
  res.render('about', { title: 'Huddle4Tech-Servicespage' })
})
app.get('/work', (req, res) => {
  res.render('about', { title: 'Huddle4Tech-Workpage' })
})
app.get('/contact', (req, res) => {
  res.render('about', { title: 'Huddle4Tech-Contactpage' })
})
// testimonials
const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO of Acme Corp',
    quote: 'This product has significantly improved our workflow!',
  },
  {
    name: 'Jane Smith',
    position: 'CTO of Beta Inc',
    quote: 'An essential tool for our daily operations.',
  },
  // Add more testimonials as needed
]

app.get('/', (req, res) => {
  res.render('index', { testimonials })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
