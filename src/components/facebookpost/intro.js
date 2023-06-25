import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Intro() {
  useEffect(() => {
    const textName = name[0];
    // const textName = prompt("Enter your name");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    const postTitle =title[0];
    // const postTitle = prompt("Enter your Post title");

    document.getElementById("textName").value = textName;
    document.getElementById("tdate").value = formattedDate;
    document.getElementById("posttitle").value = postTitle;
  }, []);

  return (
    <div className="intro">
      {/* <label htmlFor="textName">Name:</label> */}
      {/* <FontAwesomeIcon icon="fa-duotone fa-thumbs-up" />
      <i class="fa-duotone fa-thumbs-up"></i>
      <i class="fa-solid fa-thumbs-up"></i> */}
      <input type="text" id="textName" /><br/>
        {/* <label htmlFor="tdate">Uploaded:</label> */}
      <input type="date" id="tdate" /><br/>
      {/* <label htmlFor="posttitle">Post Title:</label> */}
      <input type="text" className="posttitle" id="posttitle" />
    </div>
  );
}
let name=['Khateeb Ur Rehman', ];
let title=['reciting tilawat at annual ceremoney'];