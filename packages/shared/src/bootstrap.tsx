import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const RemoteButton = React.lazy(() => import('ui/Button'));     // 来自 ui remote
const HotelApp = React.lazy(() => import('hotel/App'));         // 来自 hotel remote

function App() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <h1>Shell</h1>
      <RemoteButton />
      <HotelApp />
    </Suspense>
  );
}

createRoot(document.getElementById('root')!).render(<App />);