import React from 'react'

export default function Error({ error }) {
  return (
    <div className="error-container">
      <p>{error}</p>
    </div>
  )
}
