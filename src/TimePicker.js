// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

// export default function StaticTimePickerLandscape() {
//   const [value, setValue] = React.useState(new Date());

//   const testchange = (e) => {
//     // (newValue) => {
//     //     setValue(newValue);
//     //   }
//     console.log("check value>>>>", e.target.value);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticTimePicker
//         ampm
//         orientation="landscape"
//         openTo="minutes"
//         value={value}
//         onChange={testchange}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }

// import React from 'react';
// import TextField from '@material-ui/core/TextField';

// const TimePicker = () => {

//   return (
//     <div style={{
//       margin: 'auto',
//       display: 'block',
//       width: 'fit-content'
//     }}>
//       <h3>How to create Time Picker in ReactJS?</h3>
//       <TextField
//         label="Choose Time"
//         defaultValue="04:20"
//         type="time"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         // 5 minutes
//         inputProps={{
//           step: 300,
//         }}
//       />
//     </div>
//   );
// }

// export default TimePicker;

// import React, { useState } from "react";
// import DateTimePicker from "react-datetime-picker";

// const TimePicker = () => {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <DateTimePicker onChange={onChange} value={value} />
//     </div>
//   );
// };

// export default TimePicker;

import React, { useState } from "react";

const TimePicker = () => {
  const [value, onChange] = useState(new Date());
  const [scheduleDateTime, setScheduleDateTime] = useState("");

  const scheduleDateTimeChange = (ev) => {
    if (!ev.target["validity"].valid) return;
    const dt = ev.target["value"] + ":00Z";
    setScheduleDateTime(dt);
  };

  return (
    <div>
      <input
        type="datetime-local"
        value={(scheduleDateTime || "").toString().substring(0, 16)}
        onChange={scheduleDateTimeChange}
      />
    </div>
  );
};
