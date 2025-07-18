import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightMode = ()=>{
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect( ()=> {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
            <Card/>
          <div className="w-full max-w-sm mx-auto">
              
          </div>
        </div>
    </div>
    </ThemeProvider>
    

  )
}

export default App
