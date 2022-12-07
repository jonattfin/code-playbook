import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Head from "next/head";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function QuotesPage() {
  return (
    <>
      <Head>
        <title>The pragmatic geek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h4" component="div">
            Pragmatic Programmer(eg: Geek)
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            The word pragmatic comes from the Latin pragmaticus - &apos;skilled
            in business&apos;.
            <br />
            Programming is a craft. At its simplest, it comes down to getting a
            computer to do what you want it to do what you want it to do.
            <br />
            As a programmer, you are part listener, part advisor, part
            interpreter, and part dictator.
            <br />
            You try to capture elusive requirements and find a way of expressing
            them so that a mere marchine can do them justice.
            <br />
            You try to document your work so that others can understand it, and
            you try to engineer your work so that others can build on it.
            <br />
            What&apos;s more, you try to do all this against the relentless
            ticking of the project clock.
            <br />
            You work small miracles every day.
            <br />
            It&apos;s a difficult job.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <br />
            What makes a Pragmatic Programmer?
            <br />
            {getPragmaticProgrammerQualities().map((element, index) => (
              <Accordion key={`qualities_${index}`}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color="text.secondary">
                    {element.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {element.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <br />
            Excerpt from the book:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/"
            >
              The pragmatic programmer
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function getPragmaticProgrammerQualities(): {
  title: string;
  description: string;
}[] {
  return [
    {
      title: "Early adopter/fast adopter",
      description:
        "You have an instinct for technologies and techniques, and you love trying new things out.",
    },
    {
      title: "Inquisitive",
      description:
        "You tend to ask questions. EG: What's this quanting computing I've heard about?",
    },
    {
      title: "Critical thinker",
      description:
        "You rarely take things as given without first getting the facts.",
    },
    {
      title: "Realistic",
      description: "You try to understand the nature of each problem you face.",
    },
    {
      title: "Jack of all trades",
      description:
        "You try hard to be familiar with a broad range of technologies and environments.",
    },
  ];
}
