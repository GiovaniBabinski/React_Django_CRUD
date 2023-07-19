import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TarefasPage from './pages/TarefasPage';
import TarefasFormPage from './pages/TarefasFormPage';
import Navigation from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to={'tarefas'} />} />
          <Route path='/tarefas' element={<TarefasPage />} />
          <Route path='/tarefas-create' element={<TarefasFormPage />} />
          <Route path='/tarefas/:id' element={<TarefasFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App;