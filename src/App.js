import { NotificationContainer } from 'react-notifications';
import './App.css';
import MyRoutes from './MyRoutes';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <AuthProvider>
        <MyRoutes/>
      </AuthProvider>
    </div>
  );
}

export default App;
