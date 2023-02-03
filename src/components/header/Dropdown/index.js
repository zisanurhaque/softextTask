import React from 'react'
import Grid from './Grid'

const Dropdown = () => {

  const grid1 = [
    {
      placeholder: "Who we are",
      url: "/who-we-are",
      icon: ""
    },
    {
      placeholder: "Services",
      url: "/services",
      icon: ""
    },
    {
      placeholder: "Career",
      url: "/career",
      icon: ""
    }
  ]

  const credentials = [
    {
        icon: "icons/ind-flag.svg",
        placeholder: "+91 8000 161161",
        url: "tel:+918000161161"
    },
    {
        icon: "icons/us-flag.svg",
        placeholder: "+1 309 791 4105",
        url: "tel:+13097914105"
    },
    {
        icon: "icons/uk-flag.svg",
        placeholder: "+44 20 8133 8639",
        url: "tel:+442081338639"
    },
    {
      icon: "icons/mail-icon.svg",
      placeholder: "info@hyperlinkinfosystem.com",
      url: "mailto:info@hyperlinkinfosystem.com"
    },
    {
      icon: "icons/skype-icon.svg",
      placeholder: "hyperlink.infosystem",
      url: "skype:hyperlink.infosystem"
    }
  ]

  const social = [
    {
      icon: "/icons/fb-icon.svg",
      url: "https://www.facebook.com/zisanurhaque"
    },
    {
      icon: "/icons/tw-icon.svg",
      url: "https://twitter.com/zisanurhaque"
    },
    {
      icon: "/icons/insta-icon.svg",
      url: "/instagram"
    },
    {
      icon: "/icons/in-icon.svg",
      url: "https://www.linkedin.com/in/zisanurhaque/"
    },
    {
      icon: "/icons/yt-icon.svg",
      url: "/youtube"
    },
    {
      icon: "/icons/tp-icon.svg",
      url: "/topappdevelopmentcompanies"
    },
  ]

  const imageData = {
      image: "/images/1.png",
      placeholder: "Discover Career Opportunities at Hyperlink InfoSystem!",
      url: "https://www.hyperlinkinfosystem.com/career.html"
  }

  return (
    <div className='bg-white border border-borderColor absolute top-full left-0 h-[380px] w-[100vw] hidden group-hover:flex cursor-default'>
      
        <Grid data={grid1}/>

        <Grid data={credentials} isSocial={true} social={social}/>

        <Grid image={true} data={imageData}/>

        <Grid image={true} data={imageData}/>

    </div>
  )
}

export default Dropdown
