import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('https://jsonplaceholder.typicode.com/users');
      const response = await query.json();
      console.log('response from api: ', response);
    }
    getData();
  })
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    //Get data from the form.
    const formAddress = {
      city: event.target.city.value,
      state: event.target.state.value,
      streetNumber: event.target.streetNumber.value,
      apartmentNumber: event.target.apartmentNumber.value,
      suiteNumber: event.target.suiteNumber.value,
      floorNumber: event.target.floorNumber.value,
      zipCode: event.target.zipCode.value,
      province: event.target.province.value,
      postalCode: event.target.postalCode.value,
      countryCode: event.target.countryCode.value
    }
    const data = {
      isCompany: event.target.isCompany.value,
      companyName: event.target.companyName.value,
      inCareOfName: event.target.inCareOfName.value,
      federalEmployerIdentificationNumber: event.target.federalEmployerIdentificationNumber.value,
      individualIrsTaxNumber: event.target.individualIrsTaxNumber.value,
      usSsn: event.target.usSsn.value,
      typeOfBusiness: event.target.typeOfBusiness.value,
      yearCompanyEstablished: event.target.yearCompanyEstablished.value,
      grossAnnualIncome: event.target.grossAnnualIncome.value,
      netAnnualIncome: event.target.netAnnualIncome.value,
      numEmployeesInUs: event.target.numEmployeesInUs.value,
      address: formAddress
    }

    // const data = {
    //   "isCompany": "true",
    //   "companyName": "Microsoft",
    //   "inCareOfName": "Enoch",
    //   "federalEmployerIdentificationNumber": "11234234",
    //   "individualIrsTaxNumber": "12341234",
    //   "usSsn": "112341234",
    //   "typeOfBusiness": "Software",
    //   "yearCompanyEstablished": "1994",
    //   "grossAnnualIncome": "190",
    //   "netAnnualIncome": "100",
    //   "numEmployeesInUs": "90",
    //   "address": {
    //     "city": "Bellevue",
    //     "state": "WASHINGTON",
    //     "streetNumber": "191",
    //     "apartmentNumber": "100",
    //     "suiteNumber": "",
    //     "floorNumber": "",
    //     "zipCode": "",
    //     "province": "ANTWERP",
    //     "postalCode": "",
    //     "countryCode": "1"
    //   }
    // }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    console.log(JSONdata);

    // API endpoint where we send form data.
    const endpoint = 'https://immigr8api.com/api/employer/submitIntroduction';
    // Form the request for sending data to the server.
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    // Send the form data to forms API and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    const result = await response.json()
    console.log(result)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Immigr8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Start Onboarding
        </h1>

        <p className={styles.description}>
          Get started by entering the following details
        </p>
        <form onSubmit={handleSubmit}>
        <div className={styles.card}>
              <label>Company</label>
              <input type="radio" name="isCompany" value="true" id="isCompanyTrue" />
              <label htmlFor="isCompanyTrue">Yes</label>
              <input type="radio" name="isCompany" value="false" id="isCompanyFalse" />
              <label htmlFor="isCompanyFalse">No</label>
            </div>
          <div className={styles.grid}>
            

            <div className={styles.card}>
              <label>Company Name: </label>
              <input className={styles.homeInput} type="text" id="companyName" name="companyName" />
            </div>

            <div className={styles.card}>
              <label>In Care Of: </label>
              <input className={styles.homeInput} type="text" id="inCareOfName" name="inCareOfName" />
            </div>

            <div className={styles.card}>
              <label>Federal Employer Identification Number: </label>
              <input type="number" id="federalEmployerIdentificationNumber" name="federalEmployerIdentificationNumber" className={styles.homeInput} />
            </div>
            <div className={styles.card}>
              <label>Individual IRS Tax Number: </label>
              <input type="number" id="individualIrsTaxNumber" name="individualIrsTaxNumber" className={styles.homeInput}/>
            </div>
            <div className={styles.card}>
              <label>US SSN: </label>
              <input type="number" id="usSsn" name="usSsn" className={styles.homeInput}/>
            </div>
            <div className={styles.card}>
              <label>Type Of Business: </label>
              <input type="text" id="typeOfBusiness" name="typeOfBusiness" className={styles.homeInput}/>
            </div>
            <div className={styles.card}>
              <label>Company Established In (year): </label>
              <input type="number" id="yearCompanyEstablished" name="yearCompanyEstablished" className={styles.homeInput}/>
            </div>
            <div className={styles.card}>
              <label>Gross Annual Income: </label>
              <input type="number" id="grossAnnualIncome" name="grossAnnualIncome" className={styles.homeInput}/>
            </div>
            <div className={styles.card}>
              <label>Net Annual Income: </label>
              <input type="number" id="netAnnualIncome" name="netAnnualIncome" className={styles.homeInput}/>
            </div>

            <div className={styles.card}>
              <label>Number of Employees in US: </label>
              <input type="number" id="numEmployeesInUs" name="numEmployeesInUs" className={styles.homeInput}/>
            </div>

            
          </div>
          <div className={styles.card}>
              <label>Address</label><br></br>
              <label>City: </label><input type="text" id="city" name="city" className={styles.homeInput}/>
              <label>State: </label><input type="text" id="state" name="state" className={styles.homeInput}/>
              <label>Street Number: </label><input type="text" id="streetNumber" name="streetNumber" className={styles.homeInput} />
              <label>Apartment Number: </label><input type="text" id="apartmentNumber" name="apartmentNumber" className={styles.homeInput}/>
              <label>Suite Number: </label><input type="text" id="suiteNumber" name="suiteNumber" className={styles.homeInput}/>
              <label>Floor Number: </label><input type="text" id="floorNumber" name="floorNumber" className={styles.homeInput}/>
              <label>Zip Code: </label><input type="text" id="zipCode" name="zipCode" className={styles.homeInput}/>
              <label>Province: </label><input type="text" id="province" name="province" className={styles.homeInput}/>
              <label>Postal Code: </label><input type="text" id="postalCode" name="postalCode" className={styles.homeInput}/>
              <label>Country Code: </label><input type="text" id="countryCode" name="countryCode" className={styles.homeInput}/>
            </div>
          <button className={styles.submitButton} type="submit">Submit</button>
        </form>
      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
