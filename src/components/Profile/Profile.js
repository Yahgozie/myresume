import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import CustomTimeline from "../Timeline/Timeline";
import resumeData from "../../Utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
// import TimelineItem from "@material-ui/lab";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomTimelineSeparators from "../Timeline/CustomTimelineSeparators";
// import TimelineContent from '../Timeline/Timeline';
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparators />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile containerShadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.job}</Typography>
      </div>
      <figure className="profile_image">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I5z1SY5vo91drZf0b4ZlkIZN66FBTMiNnPGoWBqcQ=s83-c-mo"
          alt="Nwosu Yahgozie"
        />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.program} />
          <CustomTimelineItem title="Email" text={resumeData.Email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div className="button_container" style={{ display: "flex" }}>
          <CustomButton
            text={"Download Cv"}
            icon={<GetAppIcon className="appIcon" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
