import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { Card } from "./components";
import * as api from "../../api";
import { IProject } from "../../api/interfaces";

const Home: NextPage = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const populateData = async () => {
      const data = await api.fetchProjects();
      setProjects(data);
    };
    populateData();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
      >
        {projects.map((project) => (
          <Grid item xs key={project.title}>
            <Card.CustomCard data={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;

// Styled Components
