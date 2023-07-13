import React from 'react'
const ContactForm = () => {
    return (
        <div>
            <div className='container form-container'>
                <div className='row'>
                    <div className='col-12 col-lg-5 p-2 d-flex justify-content-center flex-column'>
                        <img className='img-fluid form_img' src={process.env.PUBLIC_URL + '/images/title2.jpg'}></img>
                    </div>
                    <div className='col-12 col-lg-7 p-5'>
                        <div className='row'>
                            <div className=' col-12 col-lg-6 contact'>
                                <input type='text' placeholder='First Name' className='form-control'></input>
                            </div>
                            <div className=' col-12 col-lg-6 contact'>
                                <input type='text' placeholder='Last Name' className='form-control'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-12 col-lg-6 contact'>
                                <input type='text' placeholder='Email ID' className='form-control'></input>
                            </div>
                            <div className=' col-12 col-lg-6 contact'>
                                <input type='text' placeholder='Phone No.' className='form-control'></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className=' col-12 col-lg-12 contact'>
                                <input type='text' placeholder='Subject' className='form-control'></input>
                            </div>
                            <div className=' col-12 col-lg-12 contact'>
                                <input type='text' placeholder='Your Message...' className='form-control'></input>
                            </div>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <p className="form-check-label">
                                    I agree that Prakriti-IIT Kanpur may contact me at the email address or phone number above
                                </p>
                        </div>
                        <button type='submit' className='btn btn-success w-100' style={{height: '4rem'}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm