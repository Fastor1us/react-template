import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { AnotherPage, HomePage, NotFoundPage } from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'/another-page'} element={<AnotherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
