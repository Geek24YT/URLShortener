import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold text-center py-6">URL Shortener</h1>
    <div className="container mx-auto p-4">
      <UrlForm />
      <UrlList />
    </div>
  </div>
  )
}

export default App
