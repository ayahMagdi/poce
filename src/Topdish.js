import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import {Link} from 'react-router-dom';

function Topdish(props) {
  return (
    // <Link to={`/${props.id}`}>
      <div className='top__dish' key={props.id}>
        <div className='top__dish__wrapper'>
            <div className='box__img'>
                <img src={props.img} />
            </div>
            <div className='box__info'>
                <h4>{props.title}</h4>
                {props.show == 'true' && <span className="dish__type">{props.type}</span>}
                <p>{props.sale  && <span>${props.oldPrice}</span>} ${props.price}</p>
            </div>
            {props.show == "true" && <div className='box__icon'>
                <ShoppingBasketIcon />
             </div>
            }
        </div>
      </div>
    //  </Link>
  )
}

export default Topdish