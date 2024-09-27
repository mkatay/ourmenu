import React from 'react'
import { useState,useEffect } from 'react';
import { data } from '../data';

export const Menus = ({selectedCateg}) => {
  const [menu,setMenu]=useState(null)

 useEffect(() => {
    setMenu( selectedCateg != 'all'?  data.filter(obj => obj.category == selectedCateg) : data)
  }, [selectedCateg]);

  return (
    <div className="row mt-5 p-5">
      
      {menu && menu.map(obj=>
        <div key={obj.id} className="col-md-6 col-12">
            <div className="row mt-3">
                <div className="col-5">
                    <img className='img-thumbnail' src={'images/'+obj.img} alt={obj.title} />
                </div>
                <div className="col-7">
                        <div className="d-flex justify-content-between border-bottom border-warning">
                                <h6 className="text-capitalize">{obj.title}</h6>
                                <h6 className="text-warning">${obj.price}</h6>
                                
                        </div>
                        <div>{obj.desc}</div>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}
