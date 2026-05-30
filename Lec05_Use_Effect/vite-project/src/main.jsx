import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App_demo_one from './App.jsx'
import App_demo_count from './count_app.jsx'
import Clock from './clock.jsx'

//createRoot(document.getElementById('root')).render(<App_demo_one/>)

//createRoot(document.getElementById('root')).render(<App_demo_count/>)
createRoot(document.getElementById('root')).render(<Clock/>)
