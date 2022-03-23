import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Container } from '@mui/material';
import Menu from './components/Navbar';

export default function App() {
  return (
    // Navegación
    <BrowserRouter>
    <Menu />
      <Container>
        {/* Lista de Rutas */}
        <Routes>
          {/* Ruta */}
          <Route path='/' element={<NoteList />} />
          <Route path='/notes/new' element={<NoteForm />} />
          <Route path='note/:id/edit' element={<NoteForm/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
