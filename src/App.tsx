import { Suspense } from 'react';
import './App.css'
import AppRoutes from './routes'
import PageLoader from './components/common/PageLoader';

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <AppRoutes />
    </Suspense>
  );
}
export default App
