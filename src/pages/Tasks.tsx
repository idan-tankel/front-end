// @mui
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Tasks() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Tasks">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Tasks
        </Typography>
        <Typography>Content...</Typography>
      </Container>
    </Page>
  );
}
