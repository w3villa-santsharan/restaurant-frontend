import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Button from "@mui/material/Button";

const DAYS = [
  {
    key: "sunday",
    label: "S",
  },
  {
    key: "monday",
    label: "M",
  },
  {
    key: "tuesday",
    label: "T",
  },
  {
    key: "wednesday",
    label: "W",
  },
  {
    key: "thursday",
    label: "T",
  },
  {
    key: "friday",
    label: "F",
  },
  {
    key: "saturday",
    label: "S",
  },
];

const FilterDayTime = ({ setTimeQuery }) => {
  const [time, setTime] = useState("");
  const [days, setDays] = useState([]);

  const onTimeChange = (e) => {
    const m = moment(e, "YYYY-MM-DD");
    const res = m.format("hh:mm a");
    setTime(res);
  };

  const arrayDays = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

  const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(2),
      padding: theme.spacing(0, 1),
      "&:not(:first-child)": {
        border: "1px solid",
        borderColor: "#692B7C",
        borderRadius: "50%",
      },
      "&:first-child": {
        border: "1px solid",
        borderColor: "#692B7C",
        borderRadius: "50%",
      },
    },
  }))(ToggleButtonGroup);

  const StyledToggle = withStyles({
    root: {
      color: "#692B7C",
      "&$selected": {
        color: "white",
        background: "#692B7C",
      },
      "&:hover": {
        borderColor: "#BA9BC3",
        background: "#BA9BC3",
      },
      "&:hover$selected": {
        borderColor: "#BA9BC3",
        background: "#BA9BC3",
      },
      minWidth: 32,
      maxWidth: 32,
      height: 32,
      textTransform: "unset",
      fontSize: "0.75rem",
    },
    selected: {},
  })(ToggleButton);

  const onDayChange = async (e, value) => {
    await setDays(value.filter((n) => !days.includes(n)));
  };

  const onClickFilter = (e) => {
    e.preventDefault();
    if (days.length > 0 && time) {
      console.log("days", days, arrayDays[days[0]], time);
      setTimeQuery(`${arrayDays[days[0]]} ${time}`);
    } else {
      window.alert("Please select time and date");
    }
  };

  return (
    <>
      <div className="time-picker-width">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticTimePicker
            ampm
            orientation="landscape"
            openTo="hours"
            value={time}
            onChange={onTimeChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="days-align">
        <StyledToggleButtonGroup
          size="small"
          arial-label="Days of the week"
          value={days}
          onChange={(event, value) => {
            onDayChange(event, value);
          }}
        >
          {DAYS.map((day, index) => (
            <StyledToggle key={day.key} value={index} aria-label={day.key}>
              {day.label}
            </StyledToggle>
          ))}
        </StyledToggleButtonGroup>
        <Button variant="outlined" onClick={(e) => onClickFilter(e)}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default FilterDayTime;
