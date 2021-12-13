import React from 'react';
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./CustomTimelineSeparators.css";

const CustomTimelineSeparators = () => {
    return (
        <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={'outlined'} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
    )
}

export default CustomTimelineSeparators
