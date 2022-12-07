import * as React from "react";
import { styled as materialStyled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IProject } from "../../../api/interfaces";
import { Divider, Stack } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = materialStyled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CustomCard({ data }: { data: IProject }) {
  const { frontend, backends } = data;

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {data.title[0].toUpperCase()}
          </Avatar>
        }
        title={data.title}
      />
      <CardMedia component="img" height="194" image={data.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.summaryText}
          <div>&nbsp;</div>
          <Stack
            direction="row"
            spacing={1}
            alignContent={"center"}
            alignItems={"center"}
          >
            <ExitToAppIcon color="warning" />
            <a href={frontend.webUrl} target="_blank" rel="noreferrer">
              {frontend.webUrl}
            </a>
          </Stack>
        </Typography>
      </CardContent>
      <CardContent>
        <Divider></Divider>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="text.secondary">
          {"Frontend & backend technologies"}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2" color="text.secondary">
            <Stack
              direction="row"
              spacing={1}
              alignContent={"center"}
              alignItems={"center"}
            >
              {frontend.webUrl && (
                <a href={frontend.webUrl} target="_blank" rel="noreferrer">
                  <ExitToAppIcon />
                </a>
              )}
              <a href={frontend.githubUrl} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>

              {frontend.sonarUrl && (
                <a href={frontend.sonarUrl} target="_blank" rel="noreferrer">
                  <img src={frontend.sonarImageUrl} alt="sonar url" />
                </a>
              )}
            </Stack>
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            <ul>
              {frontend.technologies.map((technology) => (
                <li key={`${data.title}_${technology}`}>
                  <a href={technology} target="_blank" rel="noreferrer">
                    {technology}
                  </a>
                </li>
              ))}
            </ul>
          </Typography>
          
          {backends.map((backend, index) => (
            <div key={`backend_${index}`}>
              <hr/>
              <Typography paragraph variant="body2" color="text.secondary">
                <Stack
                  direction="row"
                  spacing={1}
                  alignContent={"center"}
                  alignItems={"center"}
                >
                  {backend.webUrl && (
                    <a href={backend.webUrl} target="_blank" rel="noreferrer">
                      <ExitToAppIcon />
                    </a>
                  )}
                  <a href={backend.githubUrl} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>

                  {backend.sonarUrl && (
                    <a href={backend.sonarUrl} target="_blank" rel="noreferrer">
                      <img src={backend.sonarImageUrl} alt="sonar url" />
                    </a>
                  )}
                </Stack>
              </Typography>
              <Typography paragraph variant="body2" color="text.secondary">
                <ul>
                  {backend.technologies.map((technology) => (
                    <li key={`${data.title}_${technology}`}>
                      <a href={technology} target="_blank" rel="noreferrer">
                        {technology}
                      </a>
                    </li>
                  ))}
                </ul>
              </Typography>
            </div>
          ))}
        </CardContent>
        <CardContent>
          <Typography paragraph variant="body2" color="text.secondary">
            {"Source url: "}
            <a href={data.webUrl} target="_blank" rel="noreferrer">
              {data.webUrl}
            </a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
