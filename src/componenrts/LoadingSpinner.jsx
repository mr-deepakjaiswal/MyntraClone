import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className='text-center'>
      <button className="btn btn-primary spinner" type="button" disabled>
        <span className="spinner-border spinner-border-sm" aria-hidden="true" ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  )
}
