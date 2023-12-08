import React from "react";
//import PhoneInput from 'react-phone-number-input';

const Help = () => {
      return(
    <div class="container-fluid">
         <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" 
                       placeholder="name@example.com"/>
         </div>
         <div class="mb-3">
              <label for="exampleFormControlTextarea1" 
                         class="form-label">Enter your phone number</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="type the message you wish to convey to us"
                         rows="1"></textarea>
              <button type="submit">Verify</button>
          </div>
        </div>
      );
};

export default Help;