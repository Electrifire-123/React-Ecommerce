import React, { useState, useEffect} from 'react'
import Button from '../components/Button';
const OrderPlacement = () => {
    const [user, setUser] = useState({
        fName: '',
        lName: '', 
        mobile: '',
        email: '',
        address: '',
    });


    useEffect(() => {
      const keydownRef = document.addEventListener(
        'keydown',
        (e) => e.code === 'Enter' 
      );

      return () => {
        console.log('Component Unmount');
        document.removeEventListener('keydown', keydownRef);
      }

    }, []); // this is component did mount (runs only once)

    // useEffect(() => {
    //   if(interest.length > 0) console.log('componentDidUpdate');
    // },[interest]); // 
    // console.log(user)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
       
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user, interest);
        setUser({
          fName: '',
          lName: '', 
          mobile: '',
          email: '',
          address: '',
      });
    }

    const {fName,lName,email, mobile, address} =  user;
  return (
    <>
            <div className='OrderPlacement-page'>
            <form className='input_container' onSubmit={handleSubmit}>
            <section className="input_container">
                <input
                  type="text"
                  value={fName}
                  onChange={handleChange}
                  name="fName"
                  placeholder='First Name '
                  />
              </section>
              <section className="input_container">
                <input
                  type="text"
                  value={lName}
                  onChange={handleChange}
                  name="lName"
                  placeholder='Last Name '

                />
              </section>
              <section className="input_container">
                <input
                  type="number"
                  value={mobile}
                  onChange={handleChange}
                  name="mobile"
                  placeholder='Phone '

                />
              </section>
              <section>
                <input
                  type="text"
                  value={address}
                  onChange={handleChange}
                  name="address"
                  placeholder='Address'

                />
              </section>
              <section className="input_container">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  placeholder='Email '

                  />
              </section>
              <section>
                {/* <button type='submit'>Submit OrderPlacement</button> */}
                <Button className="button" buttonText="Buy Now" type="submit" />
              </section>
            </form>
            </div>
    </>
  )
}

export default OrderPlacement