import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import Copyright from '../src/components/Copyright';
// import { createClient } from '@supabase/supabase-js';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

// export async function getStaticProps() {
//   return createClient(
//     process.env.DB_URL ?? '',
//     process.env.DB_PUBLIC_ANON_KEY ?? '',
//   );
// }
