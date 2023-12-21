import { useContext } from 'react';
import Dashboard from '../../Component/Dashboard/Dashboard';
import Banner from '../Home/Banner/Banner';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user?.email ? <Dashboard /> : <Banner />}
    </div>
  );
};

export default Home;
