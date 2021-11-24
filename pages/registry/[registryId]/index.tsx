import React from "react";
import RegistryContainer from "components/registry/RegistryContainer";
import { Box, Container } from "@material-ui/core";

const RegistryPage = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <RegistryContainer />
      </Box>
    </Container>
  );
};

export default RegistryPage;
