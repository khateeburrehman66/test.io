import React, { useEffect } from 'react';

export default function Btn() {
    useEffect(() => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        const alertTrigger = document.getElementById('liveAlertBtn');
      
        const appendAlert = (message, type) => {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissible" role="alert">
              <div>${message}</div>
              <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
      
          alertPlaceholder.appendChild(wrapper);
        };
      
        const handleClick = () => {
          appendAlert('Nice, you triggered this alert message!', 'success');
        };
      
        if (alertTrigger) {
          alertTrigger.addEventListener('click', handleClick);
        }
      
        return () => {
          if (alertTrigger) {
            alertTrigger.removeEventListener('click', handleClick);
          }
        };
      }, []);
      
  return (
    <>
      <div id="liveAlertPlaceholder" ></div>
      <button type="button" className="btn btn-primary" id="liveAlertBtn">Submit</button>
    </>
  );
}
