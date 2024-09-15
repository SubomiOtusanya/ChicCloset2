import { Navigate, useNavigate } from 'react-router-dom';
import './New.css';
import Arrival from '../assets/Arrival';
import PopularProduct from './PopularProduct';
// import product from "../assets/products"

const NewItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Arrivals">
        <p>New Arrivals</p>
        <div className="card">
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              paddingLeft: '1rem',
              paddingTop: '1rem',
            }}
          >
            {Arrival.map((prod) => {
              return (
                <div key={prod.id}>
                  <img
                    src={prod.image}
                    alt=""
                    style={{ width: '130px', borderRadius: '10px' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewItem;
