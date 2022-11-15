import React from "react";
import * as s from "./blog-signup.module.css";
// const dripNodejs = require("drip-nodejs");

const BlogSignup = () => {

  // console.log(client);

  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [eu_consent, set_eu_consent] = React.useState(false);

  React.useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    fetch('https://ipwho.is/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCountry(data.country);
        setRegion(data.continent_code);
      });
  }, []);

  // const client = require('drip-nodejs')({ token: process.env.DRIP_API_TOKEN, accountId: process.env.DRIP_ACCOUNT_ID });

  const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  const submitForm = () => {
    if (!isEmailValid(email)) {
      console.log('invalid email');
      return;
    }

    const payload = {
      email: email,
      country: country,
      tags: ["blog_newsletter_signup"],
      eu_consent: eu_consent ? 'granted' : 'denied',
    };

    let url = `https://api.getdrip.com/v2/${process.env.DRIP_ACCOUNT_ID}/subscribers`;

    console.log(payload);

    let token = process.env.DRIP_API_TOKEN;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'https://api.getdrip.com',
        "Authorization": `Token ${token}`,
      },
      body: JSON.stringify(payload),
      // mode: "no-cors",
    };

    // fetch(url, requestOptions);

    // const client = dripNodejs({ token: process.env.DRIP_API_TOKEN, accountId: process.env.DRIP_ACCOUNT_ID });
    // client.createUpdateSubscriber(payload)
    //   .then((response) => {
    //     // Handle `response.body`
    //     console.log('response', response);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //     // Handle errors
    //   });
  }

  const setEUConsent = ($event) => {
    set_eu_consent($event.target.checked);
  }

  return (
    <div className={s.signUpWrapper}>
      <div className={s.signUp}>
        <div className={s.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width="25" height="30.34" viewBox="0 0 25 30.34">
            <g id="Logo">
              <g id="Group_207" data-name="Group 207">
                <path id="Path_112" data-name="Path 112" fill="#fff" d="M10.81,0,0,3.21V30.3l.06,0,10.8-3.2V0Z" />
                <path id="Path_113" data-name="Path 113" fill="#fff" d="M14.14,17.78V30.29l0,.05L25,27.14V14.61l-.06,0Z" />
              </g>
            </g>
          </svg>
        </div>
        <h2 className={s.title}>Sign up<br /> for the<br /> Levels<br /> Newsletter</h2>
        <div className={s.form}>
          <input type='email' className={s.input} placeholder="Type your email" value={email}
            onChange={e => setEmail(e.target.value)} />
          {('EU' === region) &&
            <label style={{ 'clear': 'both', 'cursor': 'pointer' }}>
              <input type="checkbox" onChange={setEUConsent} style={{ float: 'left', margin: "6px 6px 0 0" }} />
              I'm happy to receive occasional emails and for my data to be used and stored in line with the Levels Privacy Policy.
            </label>
          }
          <button type='button' className={s.button} onClick={submitForm}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSignup;
