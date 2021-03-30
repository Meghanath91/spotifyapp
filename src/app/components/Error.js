import React from 'react'
/**
 * @func Error
 * @param {string} error
 * @return {HTML}
 */
export default function Error({ error }) {
  return (
    <div className="error-container">
      <p>{error}</p>
    </div>
  )
}
