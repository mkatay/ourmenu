import React,{useState,useEffect} from 'react'

import {ListGroup,ListGroupItem} from 'reactstrap';
import {allCategories} from '../utils'

export const Categories=({selectedCateg,setSelectedCateg})=> {
    
  return (
    <div className="d-flex justify-content-center">
       <ListGroup horizontal >
            {allCategories().map(item=>(
                <ListGroupItem key={item} variant="warning" onClick={()=>setSelectedCateg(item)}
                    className={selectedCateg==item ? "bg-warning text-white" : "ctg bg-light text-warning "}>
                    {item}
                </ListGroupItem> 
            ))}
        </ListGroup>
    </div>
  )
}
