import React from 'react'

const Footer = () => {

  return (
    <div className='bg_footer py-10 border-t-8 border-pink'>
      <div className='myContainer flex flex-col gap-10 text-white'>
        <div className='flex justify-center items-center gap-3 text-white'>
          <div>
            <img src="/img/icons/logo.svg" alt="" />
          </div>
          <div className='text-2xl font-bold'>Opportunity-Loan</div>
        </div>
        <div className='text-sm leading-8'>

          <p>
            Disclaimer: Opportunity-loan is not an offer or solicitation to lend. We do not make any loan or credit decisions and are not representatives, brokers or agents of any lender. Participating lenders offer loans from $200 up to $5,000. Not all lenders can offer you amounts up to $5,000. Our service is not available in all states. Submission of a request through this website does not guarantee that you will receive a loan offer or an offer you’ll be satisfied with. Funds transfer time may vary depending on your lender and/or financial institution. If you have any questions about your loan, please contact your lеndеr directly. Credit checks may be performed with the three reporting credit bureaus: Experian, Equifax, and TransUnion. Submission of a request means you are authorizing the lenders to check your creditworthiness and your personal details.
            This service is not a solicitation for loan products and does not constitute a loan offer for any loan products that are prohibited by state law. This service is void where prohibited.
          </p>
          <p>
            State Availability: Not all lenders from our system operate in all US states. Residents of some US states may not be eligible for loan products in accordance with their legislation. By selecting your State at the start of our loan offer process, you shall be informed of any limitations regarding obtaining a loan if you reside in individual US states.
          </p>
          <p>
            This website collects personal information and transfers it to its third-party partners.
            The website contains links to third-party websites. Accessing them may result in a commission.
            Please note that personal loans should not be treated as financial cure-it-all. If you have major budget difficulties, consult specialists first.
          </p>
        </div>
        <div className='text-center pt-10 border-t mt-6 text-xs lg:text-md pb-5'>
          COPYRIGHT © 2022 OPPORTUNITY-LOAN.COM ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  )
}

export default Footer