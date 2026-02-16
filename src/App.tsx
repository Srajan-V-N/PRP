import { RouterProvider } from 'react-router';
import { BuildProvider } from '@/context/BuildContext';
import { router } from '@/router';

export default function App() {
  return (
    <BuildProvider>
      <RouterProvider router={router} />
    </BuildProvider>
  );
}
