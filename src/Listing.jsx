import React from 'react';
import Data from './etsy.json';

function Listing() {
  const data = Data;

  const ListItem = ({item}) => {
    let title = item.title || 'title';
      console.log(title);
      if (title.length > 50) {
        title = title.slice(0, 50) + '...';
      }
      let color = 'high';
      if (item.quantity <= 10) {
        color = 'low';
      } else if (item.quantity <= 10) {
        color = 'medium';
      }
      const img = item.MainImage || '';
      return (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={img.url_570xN} alt='text'/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{title}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className={"item-quantity level-" + color}>{item.quantity} left</p>
          </div>
        </div>
      )
  }

  return (
    <div className="item-list">
      {data.map(item => <ListItem item={item} />)}
    </div>
  )
}

export default Listing;