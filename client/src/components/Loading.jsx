import React from 'react'

export default function LoadingPopup() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-gray-800 bg-opacity-70 rounded-lg p-8 flex flex-col items-center">
            <svg className="animate-spin h-12 w-12 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-1.206A7.962 7.962 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-2-5.291V6c3.582 0 6.5 2.918 6.5 6.5h-4c0-1.93-1.57-3.5-3.5-3.5z"></path>
            </svg>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      );
}
