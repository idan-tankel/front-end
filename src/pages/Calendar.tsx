// @mui
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Calendar() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Calendar">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Calendar
        </Typography>
        <Typography>Content...</Typography>
      </Container>
    </Page>
  );
}
