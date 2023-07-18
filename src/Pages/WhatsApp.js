import React from 'react'
import whatsApp from '../Images/whatsapp.webp'
import { Link } from 'react-router-dom'

function WhatsApp() {
    return (
        <>
            <div className='row whatsapp fixed-bottom ms-2 mb-5'>
                <div className='col-lg-1'>
                <Link to='https://wa.me/+918427682603?text=Welcome to webtech solutions' target='_blank'> <img width={50} src={whatsApp} alt='' className='img-fluid' /></Link>       
                </div>
            </div>
        </>
    )
}

export default WhatsApp