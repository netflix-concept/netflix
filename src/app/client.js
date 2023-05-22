import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  process.env.NEXT_APP_SUPABASE_URL,
  process.env.NEXT_APP_SUPABASE_KEY
);

export default function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}

export const LoginWithGithub = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'github',
  });
  return checkError({ user, session, error });
};
