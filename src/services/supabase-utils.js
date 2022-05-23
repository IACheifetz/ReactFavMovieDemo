import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function getWatchList() {
  const { data } = await client 
    .from('FavMovies')  
    .select('*');

  return data;
}

export async function add2WatchList({ id, ...rest }) {
  const { data } = await client 
    .from('FavMovies')
    .insert({ ...rest, api_id: id })
    .single();

  return data;
}

export async function removeFromWatchList(api_id) {
  const { data } = await client 
    .from('FavMovies')  
    .delete()
    .match({ api_id })
    .single();

  return data;
}