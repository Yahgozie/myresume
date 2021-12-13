import React from "react";
import "./Resume.css";
import { Typography, Grid, Icon, Paper } from "@material-ui/core";
import CustomTimeline from "../../components/Timeline/Timeline";
import CustomTimelineSeparators from "../../components/Timeline/CustomTimelineSeparators";
import resumeData from "../../Utils/resumeData";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TimelineDot from "@material-ui/lab/TimelineDot";

function Resume() {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="aboutme_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Education and experience */}
      <Grid container className="section">
        <Grid className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resumeTimeline">
            {/*Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experience.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparators />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_company">
                        {experience.company}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/*Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparators />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.title}
                      </Typography>

                      <Typography variant="caption" className="timeline_date">
                        {education.school}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.date}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((services) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{services.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {services.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {services.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* skills */}
      <Grid container className="section graybg pb_45 p_50">
        <Grid container spacing={3}  justify-content="space-between">
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0} className="skill">
                <Typography variant="h6" className="skills_title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="skill_description">
                    <TimelineDot
                      variant={"outlined"}
                      className="timeline_dot"
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
