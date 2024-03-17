interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Paytm Money: Stocks, MF, IPO',
    description: `Join the Paytm Money family today and join the 21 million+ investors who have already benefited from our services. Our all-in-one equity investment and wealth management app provides seamless access to equity investment, futures & options trading.`,
    imgSrc: '/images/paytm.png',
    href: 'https://apps.apple.com/in/app/paytm-money-stocks-mf-ipo/id1344431352',
  },
  {
    title: 'Paytm: Secure UPI Paymentse',
    description: `Send money to your friends and family using your mobile number via Paytm UPI. Including those who are not on Paytm.Scan any QR code and make payments at grocery stores, petrol pumps, restaurants etc.Recharge your mobile and pay your utility bills (electricity, gas, water, broadband etc.) easily.`,
    imgSrc: '/images/paytm-upi.png',
    href: 'https://apps.apple.com/us/app/paytm-secure-upi-payments/id473941634',
  },
]

export default projectsData
