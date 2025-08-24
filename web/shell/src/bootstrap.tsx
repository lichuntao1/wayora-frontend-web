import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

//在宿主里先注入 UI 远程样式（还有 tokens 远程的话更要放在最前）：

// packages/web/shell/src/bootstrap.tsx
async function main() {
  // 先注入设计 Token（如果你做了 tokens 远程）
  // await import('tokens/Css');

  // 先注入 UI 远程（shadcn + Tailwind v4，带 ui- 前缀）
  await import('ui/Css');

  // （可选）预注入常用子应用的全局样式，避免切页首屏闪烁
  await import('hotel/Css');
  await import('plan/Css');

  // 然后挂载 React 应用、再按路由懒加载各子应用
}
main();


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