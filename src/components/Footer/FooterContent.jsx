import React from 'react'

const FooterContent = ({ companyName, creator }) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-content">
      {companyName && (
        <span>
          &copy; {currentYear} {companyName}
        </span>
      )}
      {creator && <span>{creator}</span>}
    </div>
  )
}

export default FooterContent
