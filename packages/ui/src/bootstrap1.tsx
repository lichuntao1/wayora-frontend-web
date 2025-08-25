import React from 'react';
import { createRoot } from 'react-dom/client';
import { TestUi } from './components/shellui/testui';
import {Calendar} from './components/ui/calendar';
import "./globals.css"; 






function App(){ 
    
    
    
    
    return <div>
                 <Calendar/>
                 <TestUi/>
           </div> 
}





createRoot(document.getElementById('root')!).render(<App />);
