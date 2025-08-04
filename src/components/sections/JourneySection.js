import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Grid, Typography, Box } from "@mui/material";
import lawImg from "../../assets/law.jpg";
import flatSystemImg from "../../assets/flat-system.jpg";
import sentenceImg from "../../assets/sentence.jpg";
import "../Home.styles.css";
import "./JourneySection.styles.css";
// Card data for easy switching
const cards = [
  {
    key: "catalog",
    title: "Organised case files and recordings",
    description:
      "Digitize and organize all case files, petitions, evidence, and documents — accessible anytime, anywhere.",
    img: sentenceImg,
    alt: "Legal System",
    highlight: true,
  },
  {
    key: "shipping",
    title: "Centralized Case Repository",
    description:
      "Easily manage cases across different court branches and jurisdictions from one dashboard.",
    img: flatSystemImg,
    alt: "System Management",
    highlight: true,
  },
  {
    key: "processing",
    title: "Quick 3-Step Case Lifecycle Management",
    description: (
      <div className="journey-steps">
        <div>
          <span className="journey-step-label">Step 1:</span> <span className="journey-step-desc">Automated Case Registration – <span className="journey-step-highlight">Instantly register and assign new cases.</span></span>
        </div>
        <div>
          <span className="journey-step-label">Step 2:</span> <span className="journey-step-desc">Smart Hearing Scheduler – <span className="journey-step-highlight">Schedule hearings with conflict checks and judge availability.</span></span>
        </div>
        <div>
          <span className="journey-step-label">Step 3:</span> <span className="journey-step-desc">One-Click Document Uploads – <span className="journey-step-highlight">Securely attach briefs, judgments, and legal notices.</span></span>
        </div>
      </div>
    ),
    img: lawImg,
    alt: "Legal Process",
    highlight: true,
  },
];

const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="journey-section">
      <Container className="m-0 p-0">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 300,
            mb: 4,
            color: "#222",
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
          }}
        >
          How CaseFlow Streamlines the{" "}
          <Box
            component="span"
            sx={{ color: "white", fontWeight: 700, fontStyle: "italic" }}
          >
            Judiciary Process
          </Box>
        </Typography>
        <Grid

          className="flex flex-row justify-between items-center gap-24 p-0 m-0"
        >
          {/* Smaller Image */}
          <Grid item xs={12} md={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "350px",
                overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={cards[activeIndex].img}
                  alt={cards[activeIndex].alt}
                  initial={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0)" }}
                  exit={{ opacity: 0, scale: 0.96, y: 20, filter: "blur(8px)" }}
                  transition={{ duration: 0.7, ease: [0.4, 2, 0.3, 1] }}
                  style={{
                    width: "100%",
                    maxHeight: "420px",
                    maxWidth: "420px",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 20,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  }}
                />
              </AnimatePresence>
            </Box>
          </Grid>

          {/* Cards taking more space */}
          <Grid item className="max-w-3/5" md={8}>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              sx={{
                justifyContent: "center",
              }}
            >
              <AnimatePresence mode="wait">
                {cards.map((card, idx) => (
                  idx === activeIndex && (
                    <motion.div
                      key={card.key}
                      className={`feature-card${idx === activeIndex ? ' active highlight' : ' inactive'}`}
                      initial={{ opacity: 0, scale: 0.98, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 8 }}
                      transition={{ duration: 0.7, ease: [0.4, 2, 0.3, 1] }}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 0.95,
                          color:
                            idx === activeIndex && card.highlight ? "#fff" : "#222",
                          fontSize: "1.25rem",
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-0.3px",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color:
                            idx === activeIndex && card.highlight ? "#fff" : "#555",
                          fontWeight: 600,
                          lineHeight: 1.6,
                        }}
                        className="journey-step-desc"
                      >
                        {card.description}
                      </Typography>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JourneySection;
