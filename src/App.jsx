// import { useState } from 'react'

// import './App.css'
// import App from './component/Dropdown'
// import { HashLink } from 'react-router-hash-link'
// import { HashRouter } from 'react-router-dom'
// import MediaCard from './component/card'

// const Nav = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', color: 'white', backgroundColor: 'black', position: 'sticky', top: 0, zIndex: 1 }}>    
//       <HashLink to="#mediacard" smooth>MediaCard</HashLink>
//       <HashLink to="#app" smooth>App</HashLink>
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//     <HashRouter>
//       <Nav />
    
//       <section id="mediacard" style={{ minHeight: '100vh' }}>
//         <MediaCard />
//       </section>
//       <section id="app" style={{ minHeight: '100vh' }}>  
//         <App />
//       </section>
//       </HashRouter>
//     </>
//   )
// }

// export default App

import Counters from './counter'
import Toggle from './toggle'
import TodoApp from './component/add_to_card'
import Window from './component/Window'
import { CenterFocusStrong } from '@mui/icons-material'

function App() {
  return (
    <div style={{margin:400,color:'black'}}>
      {/* < Counters/>
      <Toggle/> */}

       <TodoApp/>
       {/* <Window/> */}
     
    </div>
  )
}

export default App
